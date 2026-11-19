import { html, nothing, type PropertyValues } from "lit";
import { HeimanElement } from "./base";
import { cardStyles } from "./card-styles";
import { CATALOG, KIND_ICONS } from "./catalog";
import { configurationEntities, domainOf, resolveDevice } from "./entities";
import { icon, deviceDrawing } from "./icons";
import { languageFor, type TranslationKey } from "./i18n";
import { formatState, summarize, unavailable } from "./state";
import type { CardConfig, EntityState, HomeAssistant, Role } from "./types";

export class HeimanDeviceCard extends HeimanElement {
  static styles = cardStyles;
  static properties = {
    _busy: { state: true },
    _serviceError: { state: true },
    _settingsOpen: { state: true },
    _detailsOpen: { state: true },
  };
  private _busy = false;
  private _serviceError = false;
  private _settingsOpen = false;
  private _detailsOpen = false;
  private _watchedEntities = new Set<string>();

  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size !== 1 || !changed.has("hass")) return true;
    const previous = changed.get("hass") as HomeAssistant | undefined;
    const current = this.hass;
    if (!previous || !current) return true;
    for (const key of [
      "devices",
      "entities",
      "areas",
      "locale",
      "language",
      "themes",
      "connection",
    ] as const) {
      if (previous[key] !== current[key]) return true;
    }
    return [...this._watchedEntities].some(
      (id) => previous.states[id] !== current.states[id],
    );
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("heiman-device-card-editor");
  }
  static getStubConfig(): CardConfig {
    return { type: "custom:heiman-device-card", model: "auto", style: "home" };
  }
  getCardSize(): number {
    return 3;
  }
  getGridOptions(): object {
    return { columns: 12, rows: "auto", min_columns: 6 };
  }

  protected render() {
    const hass = this.hass;
    if (!hass) return nothing;
    const resolution = resolveDevice(this._config, hass, this._registry);
    const { device, preset, bindings, entities, reason } = resolution;
    this._watchedEntities = new Set([
      ...entities.map((entity) => entity.entity_id),
      ...Object.values(bindings).flatMap((ids) => ids ?? []),
    ]);
    const theme = this._config.style ?? "home";
    const hasBindings = Object.values(bindings).some((ids) => ids?.length);
    if (reason || !preset || (!device && !hasBindings))
      return html` <ha-card
        class=${theme}
        data-severity="unknown"
        ?data-dark=${hass.themes?.darkMode}
      >
        <div class="empty">
          <div class="brand">HEIMAN</div>
          <p>
            ${this.t(this._loading ? "loading" : this._registryError && !hasBindings ? "registry_error" : (reason ?? "no_entities"))}
          </p>
          ${this._registryError ? html`<button class="action" @click=${() => this._syncRegistry(true)}>${this.t("retry")}</button>` : nothing}
        </div>
      </ha-card>`;
    const status = summarize(preset.kind, bindings, hass);
    const primary =
      status.primary ??
      this._config.entity ??
      entities.find(
        (entry) => !entry.disabled_by && !entry.hidden_by && !entry.hidden,
      )?.entity_id;
    const title =
      this._config.name || device?.name_by_user || device?.name || preset.id;
    const area = device?.area_id
      ? hass.areas?.[device.area_id]?.name
      : undefined;
    const platform = entities.find((entity) => entity.platform)?.platform;
    const source =
      platform === "zha" ? "ZHA" : platform === "mqtt" ? "MQTT" : platform;
    const metricRoles: Role[] = [
      "temperature",
      "humidity",
      "co2",
      "pm25",
      "voc",
      "power",
      "energy",
      "illuminance",
      "action",
    ];
    if (this._config.show_battery !== false) metricRoles.push("battery");
    if (this._config.show_signal !== false) metricRoles.push("signal");
    const metrics = metricRoles.flatMap((role) =>
      bindings[role]?.[0] ? [{ role, id: bindings[role]![0] }] : [],
    );
    const metricColumns =
      metrics.length === 4 ? 2 : Math.min(metrics.length, 3);
    const controls =
      this._config.show_controls !== false
        ? (bindings.control ?? []).filter((id) => domainOf(id) !== "siren")
        : [];
    const settings = [
      ...new Map(
        [
          ...configurationEntities(entities, hass, preset.kind),
          ...entities.filter(
            (entry) =>
              domainOf(entry.entity_id) === "siren" &&
              !entry.disabled_by &&
              !entry.hidden_by &&
              !entry.hidden,
          ),
          ...(bindings.control ?? [])
            .filter((id) => domainOf(id) === "siren")
            .map(
              (entity_id) =>
                entities.find((entry) => entry.entity_id === entity_id) ?? {
                  entity_id,
                },
            ),
        ].map((entry) => [entry.entity_id, entry]),
      ).values(),
    ];
    const newest = Object.values(bindings)
      .flatMap((ids) => ids ?? [])
      .map((id) => hass.states[id]?.last_updated)
      .filter((value): value is string => Boolean(value))
      .sort()
      .at(-1);
    const date = newest ? new Date(newest) : undefined;
    const updated =
      date && Number.isFinite(date.getTime())
        ? date.toLocaleTimeString(languageFor(this._config, hass), {
            hour: "2-digit",
            minute: "2-digit",
          })
        : undefined;
    const details = this._detailEntities();
    return html` <ha-card
      class=${theme}
      data-severity=${status.severity}
      ?data-dark=${hass.themes?.darkMode}
    >
      <div class="body">
        <div class="top">
          <span class="brand">HEIMAN</span
          ><span class="model">${preset.id}</span>
        </div>
        <div class="heading">
          ${primary ? html`<button class="illustration icon-button" aria-label=${this.t("more_info")} @click=${() => this._moreInfo(primary)}>${deviceDrawing(preset.kind)}</button>` : html`<div class="illustration">${deviceDrawing(preset.kind)}</div>`}
          <div class="identity">
            <h2 title=${title}>${title}</h2>
            <div class="subheading">
              ${[area, this.t(preset.kind)].filter(Boolean).join(" · ")}
            </div>
          </div>
        </div>
        <div
          class="overview"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div class="status">
            ${icon(status.severity === "alarm" || status.severity === "warning" ? "alert" : status.severity === "normal" ? "check" : KIND_ICONS[preset.kind], 14)}<span
              class="status-label"
              >${this.t(status.key)}</span
            >
          </div>
          ${status.alerts.length ? html`<div class="alerts">${status.alerts.map((role) => html`<span class="alert">${this.t(role)}</span>`)}</div>` : nothing}
          ${status.partial ? html`<span class="partial">${this.t("partial")}</span>` : nothing}
        </div>
        ${
          metrics.length
            ? html`<div
                class="metrics"
                style=${`--metric-columns: ${metricColumns}`}
              >
                ${metrics.map(
                  ({ role, id }, index) =>
                    html` <button
                      class="metric"
                      @click=${() => this._moreInfo(id)}
                      aria-label=${`${this.t(role)}: ${this._display(hass.states[id])}`}
                      title=${`${this.t(role)}: ${this._display(hass.states[id])}`}
                      style=${index === metrics.length - 1 && metrics.length % metricColumns ? `grid-column: span ${metricColumns - (metrics.length % metricColumns) + 1}` : nothing}
                    >
                      <span class="metric-label"
                        >${icon(this._metricIcon(role), 15)}${this.t(role)}</span
                      >
                      <span class="metric-value"
                        >${unavailable(hass.states[id]) ? "—" : this._display(hass.states[id])}</span
                      >
                    </button>`,
                )}
              </div>`
            : nothing
        }
        ${controls.length ? html`<div class="actions">${controls.map((id) => this._renderControl(id))}</div>` : nothing}
        <div class="footer">
          <span
            class="stamp"
            title=${date ? `${this.t("updated")} ${date.toLocaleString(languageFor(this._config, hass))}` : this.t("not_reported")}
          >
            ${source || "Home Assistant"}${updated ? ` · ${updated}` : ""}
          </span>
          ${
            this._config.show_controls !== false && settings.length
              ? html`<button
                  class="panel-toggle settings-toggle"
                  aria-expanded=${this._settingsOpen}
                  aria-controls="device-settings"
                  @click=${() => {
                    this._settingsOpen = !this._settingsOpen;
                    this._detailsOpen = false;
                  }}
                >
                  ${icon("settings", 13)}${this.t("settings")}
                </button>`
              : nothing
          }
          ${
            this._config.show_details !== false && details.length
              ? html`<button
                  class="panel-toggle details-toggle"
                  aria-expanded=${this._detailsOpen}
                  aria-controls="entity-readings"
                  @click=${() => {
                    this._detailsOpen = !this._detailsOpen;
                    this._settingsOpen = false;
                  }}
                >
                  ${this.t("details")}${icon("chevron", 12)}
                </button>`
              : nothing
          }
        </div>
        ${
          this._config.show_controls !== false && settings.length
            ? html`<heiman-entity-controls
                id="device-settings"
                .hass=${hass}
                .entities=${settings}
                .language=${languageFor(this._config, hass)}
                .disabled=${status.severity === "unavailable"}
                .expanded=${this._settingsOpen}
                .urgent=${status.severity === "alarm"}
              ></heiman-entity-controls>`
            : nothing
        }
        ${this._serviceError ? html`<div class="error" role="alert">${this.t("service_error")}</div>` : nothing}
        ${
          this._config.show_details !== false && details.length
            ? html`<div
                class="readings"
                id="entity-readings"
                ?hidden=${!this._detailsOpen}
              >
                ${details.map((id) => this._entityRow(id))}
              </div>`
            : nothing
        }
      </div>
    </ha-card>`;
  }

  private _detailEntities(): string[] {
    if (!this.hass) return [];
    const resolution = resolveDevice(this._config, this.hass, this._registry);
    const hidden = new Set<string>();
    if (this._config.show_battery === false)
      for (const id of resolution.bindings.battery ?? []) hidden.add(id);
    if (this._config.show_signal === false)
      for (const id of resolution.bindings.signal ?? []) hidden.add(id);
    return [
      ...new Set([
        ...resolution.entities
          .filter(
            (entry) => !entry.disabled_by && !entry.hidden_by && !entry.hidden,
          )
          .map((entry) => entry.entity_id),
        ...Object.values(resolution.bindings).flatMap((ids) => ids ?? []),
      ]),
    ]
      .filter((id) => !hidden.has(id))
      .sort();
  }
  private _display(state?: EntityState): string {
    if (!state || state.state === "unknown") return this.t("unknown");
    if (unavailable(state)) return this.t("unavailable");
    if (
      ["binary_sensor", "switch", "light", "siren"].includes(
        domainOf(state.entity_id),
      ) &&
      ["on", "off"].includes(state.state)
    )
      return this.t(state.state as TranslationKey);
    return formatState(this.hass!, state);
  }
  private _metricIcon(role: Role): string {
    if (["power", "energy", "voltage", "current"].includes(role))
      return "energy";
    if (["co2", "pm25", "voc"].includes(role)) return "air";
    if (role === "illuminance") return "light";
    if (role === "action") return "remote";
    return role;
  }
  private _entityRow(id: string) {
    const state = this.hass?.states[id];
    return html`<button
      class="entity-row"
      @click=${() => this._moreInfo(id)}
      title=${id}
    >
      <span>${state?.attributes.friendly_name ?? id}</span
      ><span>${this._display(state)}</span>
    </button>`;
  }
  private _renderControl(id: string) {
    const state = this.hass?.states[id];
    const domain = domainOf(id);
    const label = String(state?.attributes.friendly_name ?? id);
    const disabled = unavailable(state) || this._busy;
    if (domain === "cover") {
      const features = Number(state?.attributes.supported_features ?? 0);
      const actions = [
        { flag: 1, key: "open" as const, service: "open_cover" },
        { flag: 8, key: "stop" as const, service: "stop_cover" },
        { flag: 2, key: "close" as const, service: "close_cover" },
      ].filter((action) => features & action.flag);
      if (!actions.length)
        return html`<button class="action" @click=${() => this._moreInfo(id)}>
          ${icon("cover", 16)}${label}
        </button>`;
      return actions.map(
        (action) =>
          html`<button
            class="action"
            ?disabled=${disabled}
            aria-label=${`${this.t(action.key)} ${label}`}
            @click=${() => this._command(id, action.service)}
          >
            ${icon(action.key === "stop" ? "stop" : "cover", 16)}${this.t(action.key)}
          </button>`,
      );
    }
    // Sounders and device-specific configuration use HA's own capability-aware dialog.
    if (domain === "siren")
      return html`<button
        class="action"
        ?disabled=${disabled}
        @click=${() => this._moreInfo(id)}
      >
        ${icon("bell", 16)}${label}
      </button>`;
    const service = state?.state === "on" ? "turn_off" : "turn_on";
    return html`<button
      class="action"
      ?disabled=${disabled}
      @click=${() => this._command(id, service)}
    >
      ${icon("power", 16)}${label} · ${this.t(service)}
    </button>`;
  }
  private async _command(id: string, service: string): Promise<void> {
    if (!this.hass || this._busy || unavailable(this.hass.states[id])) return;
    this._busy = true;
    this._serviceError = false;
    try {
      await this.hass.callService(domainOf(id), service, { entity_id: id });
    } catch {
      this._serviceError = true;
    } finally {
      this._busy = false;
    }
  }
}

// Keep the public discovery name independent of the HACS repository filename.
export const CARD_METADATA = {
  type: "heiman-device-card",
  name: "HEIMAN Dashboard",
  description: `HEIMAN · Zigbee2MQTT / ZHA · ${CATALOG.length} models · 家居 / 消防 / 简约`,
  preview: true,
};
