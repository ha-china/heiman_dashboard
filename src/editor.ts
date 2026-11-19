import { css, html, nothing } from "lit";
import { HeimanElement } from "./base";
import { CATALOG, KIND_ICONS } from "./catalog";
import { ROLES } from "./config";
import { resolveDevice } from "./entities";
import { icon } from "./icons";
import { LANGUAGE_NAMES } from "./i18n";
import { PRIMARY_ROLES } from "./state";
import type { CardConfig, CardStyle, Role } from "./types";

export class HeimanCardEditor extends HeimanElement {
  static properties = {
    _search: { state: true },
    _inputError: { state: true },
  };
  private _search = "";
  private _inputError = "";
  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color, #222);
      font-family: var(--paper-font-body1_-_font-family, sans-serif);
    }
    * {
      box-sizing: border-box;
    }
    .intro {
      padding: 18px;
      background: var(--secondary-background-color, #f5f6f5);
      border-radius: 12px;
      margin-bottom: 20px;
    }
    .brand {
      color: var(--primary-color, #4a7057);
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: 800;
    }
    .intro p {
      margin: 8px 0 0;
      font-size: 13px;
      line-height: 1.6;
      color: var(--secondary-text-color, #666);
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      margin: 16px 0 7px;
    }
    input,
    select {
      width: 100%;
      min-height: 44px;
      font: inherit;
      font-size: 14px;
      padding: 10px 12px;
      border: 1px solid var(--divider-color, #ddd);
      border-radius: 8px;
      background: var(--card-background-color, white);
      color: inherit;
    }
    input:focus-visible,
    select:focus-visible,
    button:focus-visible,
    summary:focus-visible {
      outline: 2px solid var(--primary-color, #4a7057);
      outline-offset: 2px;
    }
    input[type="search"] {
      margin-bottom: 8px;
    }
    .styles {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
    }
    .style {
      display: flex;
      flex-direction: column;
      text-align: center;
      overflow-wrap: anywhere;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-height: 62px;
      border: 2px solid transparent;
      border-radius: 9px;
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      padding: 8px;
    }
    .style.home {
      color: #37583e;
      background: #edf1e7;
    }
    .style.fire {
      color: #ffb5a8;
      background: #1c293a;
    }
    .style.minimal {
      color: var(--primary-text-color, #333);
      background: var(--secondary-background-color, #f5f5f5);
    }
    .style[aria-pressed="true"] {
      border-color: var(--primary-color, #547c60);
    }
    .help {
      font-size: 12px;
      line-height: 1.6;
      color: var(--secondary-text-color, #666);
      margin-top: 8px;
    }
    .status {
      padding: 10px 12px;
      background: var(--secondary-background-color, #f4f5f5);
      border-radius: 8px;
      margin-top: 10px;
    }
    .toggles {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4px 8px;
      margin: 16px 0;
    }
    .toggle {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 4px 0;
      font-size: 12px;
      cursor: pointer;
    }
    input[type="checkbox"] {
      width: 18px;
      min-height: 18px;
      margin: 0;
      accent-color: var(--primary-color, #547c60);
    }
    details {
      border-top: 1px solid var(--divider-color, #ddd);
      margin-top: 16px;
      padding-top: 14px;
    }
    summary {
      cursor: pointer;
      font-size: 14px;
    }
    .error {
      color: var(--error-color, #bd302a);
      font-size: 13px;
      margin-top: 10px;
    }
    .retry {
      font: inherit;
      cursor: pointer;
      padding: 6px 12px;
      margin-left: 8px;
    }
    .selection {
      display: flex;
      gap: 6px;
      align-items: center;
    }
    .count {
      font-size: 11px;
      color: var(--secondary-text-color, #777);
      float: right;
    }
  `;

  protected render() {
    const hass = this.hass;
    if (!hass) return nothing;
    const resolved = resolveDevice(this._config, hass, this._registry);
    const query = this._search.toLowerCase().trim();
    const models = CATALOG.filter(
      (model) =>
        [
          model.id,
          model.description,
          this.t(model.kind),
          ...model.aliases,
        ].some((value) => value.toLowerCase().includes(query)) ||
        model.id === this._config.model,
    );
    const kinds = [...new Set(models.map((model) => model.kind))];
    const roles = [
      ...new Set<Role>([
        ...(resolved.preset
          ? (PRIMARY_ROLES[resolved.preset.kind] ?? [])
          : ROLES),
        "battery",
        "battery_low",
        "temperature",
        "humidity",
        "signal",
        "fault",
        "tamper",
        "test",
        "muted",
        ...(Object.keys(this._config.entities ?? {}) as Role[]),
      ]),
    ];
    const options = resolved.device
      ? this._registry.entities
          .filter(
            (entry) =>
              entry.device_id === resolved.device!.id && !entry.disabled_by,
          )
          .map((entry) => entry.entity_id)
      : Object.keys(hass.states).slice(0, 500);
    return html`
      <div class="intro">
        <div class="brand">HEIMAN DASHBOARD</div>
        <p>${this.t("device_help")}</p>
      </div>
      <label for="model"
        >${this.t("model")}<span class="count"
          >${models.length} / ${CATALOG.length}</span
        ></label
      >
      <input
        type="search"
        id="search"
        aria-label=${this.t("search")}
        placeholder=${this.t("search")}
        .value=${this._search}
        @input=${(event: InputEvent) => {
          this._search = (event.target as HTMLInputElement).value;
        }}
      />
      <select id="model" @change=${this._modelChanged}>
        <option value="auto" .selected=${this._config.model === "auto"}>
          ${this.t("auto")}
        </option>
        ${kinds.map((kind) => html`<optgroup label=${this.t(kind)}>${models.filter((model) => model.kind === kind).map((model) => html`<option value=${model.id} .selected=${this._config.model === model.id}>${model.id}</option>`)}</optgroup>`)}
      </select>
      <label for="device">${this.t("device")}</label>
      <select id="device" @change=${this._deviceChanged}>
        <option value="" .selected=${!this._config.device_id}>
          ${this.t("auto")}${resolved.candidates.length === 1 ? ` · ${resolved.candidates[0].name_by_user || resolved.candidates[0].name || resolved.candidates[0].model}` : ""}
        </option>
        ${this._config.device_id && !resolved.candidates.some((device) => device.id === this._config.device_id) ? html`<option value=${this._config.device_id} selected>${this._config.device_id}</option>` : nothing}
        ${resolved.candidates.map((device) => html`<option value=${device.id} .selected=${this._config.device_id === device.id}>${device.name_by_user || device.name || device.model} · ${device.model}</option>`)}
      </select>
      ${this._loading ? html`<div class="help">${this.t("loading")}</div>` : nothing}
      ${this._registryError ? html`<div class="error">${this.t("registry_error")}<button class="retry" @click=${() => this._syncRegistry(true)}>${this.t("retry")}</button></div>` : nothing}
      ${resolved.reason ? html`<div class="help status">${this.t(resolved.reason)}</div>` : html`<div class="help status selection">${icon(KIND_ICONS[resolved.preset?.kind ?? "smoke"], 16)}${resolved.preset?.id} · ${resolved.entities.length} ${this.t("details")}</div>`}
      <label>${this.t("style")}</label>
      <div class="styles" role="group" aria-label=${this.t("style")}>
        ${(["home", "fire", "minimal"] as CardStyle[]).map((style) => html`<button class=${`style ${style}`} aria-pressed=${String(this._config.style === style)} @click=${() => this._change({ style })}>${icon(style === "home" ? "door" : style === "fire" ? "smoke" : "settings", 18)}${this.t(style)}</button>`)}
      </div>
      <label for="name">${this.t("name")}</label>
      <input
        id="name"
        .value=${this._config.name ?? ""}
        placeholder=${resolved.device?.name_by_user || resolved.device?.name || "HEIMAN"}
        @change=${(event: Event) => this._change({ name: (event.target as HTMLInputElement).value || undefined })}
      />
      <label for="language">${this.t("language")}</label>
      <select
        id="language"
        @change=${(event: Event) => this._change({ language: (event.target as HTMLSelectElement).value as CardConfig["language"] })}
      >
        ${[
          ["auto", this.t("follow_system")],
          ...Object.entries(LANGUAGE_NAMES),
        ].map(
          ([value, label]) =>
            html`<option
              value=${value}
              .selected=${this._config.language === value}
            >
              ${label}
            </option>`,
        )}
      </select>
      <div class="toggles">
        ${(["show_battery", "show_signal", "show_controls", "show_details"] as const).map((key) => html`<label class="toggle"><input type="checkbox" .checked=${this._config[key] !== false} @change=${(event: Event) => this._change({ [key]: (event.target as HTMLInputElement).checked })} />${this.t(key)}</label>`)}
      </div>
      <details>
        <summary>${this.t("advanced")}</summary>
        <p class="help">${this.t("assignments_help")}</p>
        <datalist id="entity-options">
          ${options.sort().map((id) => html`<option value=${id}>${hass.states[id]?.attributes.friendly_name ?? id}</option>`)}
        </datalist>
        <label for="primary">${this.t("config_entity")}</label>
        <input
          id="primary"
          list="entity-options"
          .value=${this._config.entity ?? ""}
          placeholder="binary_sensor.…"
          @change=${(event: Event) => this._change({ entity: (event.target as HTMLInputElement).value || undefined })}
        />
        ${roles.map((role) => html`<label for=${`entity-${role}`}>${this.t(role)}</label><input id=${`entity-${role}`} list="entity-options" .value=${this._config.entities?.[role] ?? ""} placeholder=${resolved.bindings[role]?.join(", ") ?? this.t("auto")} @change=${(event: Event) => this._overrideChanged(role, (event.target as HTMLInputElement).value)} /> `)}
      </details>
      ${this._inputError ? html`<div class="error" role="alert">${this._inputError}</div>` : nothing}
    `;
  }
  private _change(patch: Partial<CardConfig>): void {
    const config = { ...this._config, ...patch };
    for (const key of Object.keys(config))
      if (config[key] === undefined) delete config[key];
    try {
      this.setConfig(config);
      this._inputError = "";
    } catch (error) {
      this._inputError = (error as Error).message;
      return;
    }
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      }),
    );
  }
  private _modelChanged(event: Event): void {
    const model = (event.target as HTMLSelectElement).value;
    const config = {
      ...this._config,
      model,
      device_id: undefined,
      entity: undefined,
      entities: {},
    };
    const resolved = this.hass
      ? resolveDevice(config, this.hass, this._registry)
      : undefined;
    this._change({
      model,
      device_id:
        resolved?.candidates.length === 1
          ? resolved.candidates[0].id
          : undefined,
      entity: undefined,
      entities: {},
    });
  }
  private _deviceChanged(event: Event): void {
    this._change({
      device_id: (event.target as HTMLSelectElement).value || undefined,
      entity: undefined,
      entities: {},
    });
  }
  private _overrideChanged(role: Role, value: string): void {
    const entities = { ...this._config.entities };
    if (value) entities[role] = value.trim();
    else delete entities[role];
    this._change({ entities });
  }
}
