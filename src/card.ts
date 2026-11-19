import { html, nothing } from "lit";
import { HeimanElement } from "./base";
import { cardStyles } from "./card-styles";
import { CATALOG, KIND_ICONS } from "./catalog";
import { configurationEntities, domainOf, resolveDevice } from "./entities";
import { icon, deviceDrawing } from "./icons";
import { languageFor, type TranslationKey } from "./i18n";
import { formatState, summarize, unavailable } from "./state";
import type { CardConfig, EntityState, Role } from "./types";

export class HeimanDeviceCard extends HeimanElement {
  static styles = cardStyles;
  static properties = {
    _busy: { state: true },
    _serviceError: { state: true },
  };
  private _busy = false;
  private _serviceError = false;

  static getConfigElement(): HTMLElement {
    return document.createElement("heiman-device-card-editor");
  }
  static getStubConfig(): CardConfig {
    return { type: "custom:heiman-device-card", model: "auto", style: "home" };
  }
  getCardSize(): number {
    return 7;
  }
  getGridOptions(): object {
    return { columns: 6, rows: "auto", min_columns: 3 };
  }

  protected render() {
    const hass = this.hass;
    if (!hass) return nothing;
    const resolution = resolveDevice(this._config, hass, this._registry);
    const { device, preset, bindings, entities, reason } = resolution;
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
    const controls =
      this._config.show_controls !== false ? (bindings.control ?? []) : [];
    const settings = configurationEntities(entities, hass, preset.kind);
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
          <div>
            <h2>${title}</h2>
            <div class="subheading">
              ${[area, this.t(preset.kind)].filter(Boolean).join(" · ")}
            </div>
          </div>
          ${primary ? html`<button class="icon-button" aria-label=${this.t("more_info")} @click=${() => this._moreInfo(primary)}>${icon("info")}</button>` : nothing}
        </div>
        <div class="hero" role="status" aria-live="polite" aria-atomic="true">
          <div class="illustration">${deviceDrawing(preset.kind)}</div>
          <div class="status">
            <div class="status-label">${this.t(status.key)}</div>
            <div class="status-caption">
              <span class="dot"></span>${this.t(preset.kind)}
            </div>
            <div class="status-tag">
              ${icon(status.severity === "alarm" || status.severity === "warning" ? "alert" : status.severity === "normal" ? "check" : KIND_ICONS[preset.kind], 13)}${status.severity === "normal" ? this.t("tracking") : this.t(status.key)}
            </div>
          </div>
        </div>
        ${status.alerts.length ? html`<div class="alerts">${status.alerts.map((role) => html`<span class="alert">${icon("alert", 14)}${this.t(role)}</span>`)}</div>` : nothing}
        ${
          metrics.length
            ? html`<div class="metrics">
                ${metrics.map(
                  ({ role, id }) =>
                    html` <button
                      class="metric"
                      @click=${() => this._moreInfo(id)}
                      aria-label=${`${this.t(role)}: ${this._display(hass.states[id])}`}
                    >
                      <span class="metric-label"
                        >${icon(this._metricIcon(role), 15)}${this.t(role)}</span
                      >
                      <span class="metric-value"
                        >${this._display(hass.states[id])}</span
                      >
                    </button>`,
                )}
              </div>`
            : nothing
        }
        ${status.partial ? html`<p class="partial">${this.t("partial")}</p>` : nothing}
        ${controls.length ? html`<div class="actions">${controls.map((id) => this._renderControl(id))}</div>` : nothing}
        ${
          this._config.show_controls !== false && settings.length
            ? html`<details class="settings">
                <summary>${this.t("settings")}</summary>
                ${settings.map((entry) => this._entityRow(entry.entity_id))}
              </details>`
            : nothing
        }
        ${this._serviceError ? html`<div class="error" role="alert">${this.t("service_error")}</div>` : nothing}
        <div class="footer">
          <span>${source || "Home Assistant"}</span
          ><span
            title=${date?.toLocaleString(languageFor(this._config, hass)) ?? ""}
            >${updated ? `${this.t("updated")} ${updated}` : this.t("not_reported")}</span
          >
        </div>
        ${
          this._config.show_details !== false && details.length
            ? html`<details class="readings">
                <summary>${this.t("details")} · ${details.length}</summary>
                ${details.map((id) => this._entityRow(id))}
              </details>`
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
