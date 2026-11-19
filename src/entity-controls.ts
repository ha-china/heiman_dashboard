import { LitElement, css, html, nothing } from "lit";
import { live } from "lit/directives/live.js";
import {
  canCommand,
  numericValue,
  settingKind,
  settingLabel,
  sirenParameters,
  sirenTones,
  type SirenDraft,
} from "./control-actions";
import { domainOf } from "./entities";
import { translate, type TranslationKey } from "./i18n";
import { icon } from "./icons";
import { isActive } from "./state";
import type {
  EntityState,
  HomeAssistant,
  Language,
  RegistryEntity,
} from "./types";

export class HeimanEntityControls extends LitElement {
  static properties = {
    hass: { attribute: false },
    entities: { attribute: false },
    language: { attribute: false },
    disabled: { type: Boolean },
    _pending: { state: true },
    _feedback: { state: true },
    _failed: { state: true },
  };
  declare hass?: HomeAssistant;
  entities: RegistryEntity[] = [];
  language: Language = "en";
  disabled = false;
  private _pending = new Map<string, number>();
  private _feedback?: TranslationKey;
  private _failed = false;
  private _sequence = 0;
  private _drafts = new Map<string, string>();
  private _sirens = new Map<string, SirenDraft>();
  static styles = css`
    :host {
      display: block;
      margin-top: 14px;
      font: inherit;
      color: var(--ink);
    }
    * {
      box-sizing: border-box;
    }
    button,
    input,
    select {
      font: inherit;
      color: inherit;
    }
    button,
    input,
    select {
      min-height: 40px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--tile);
    }
    button {
      cursor: pointer;
      padding: 8px 12px;
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    button:disabled,
    input:disabled,
    select:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button:focus-visible,
    input:focus-visible,
    select:focus-visible,
    summary:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
    .quick {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 10px;
    }
    .quick button {
      flex: 1 1 auto;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 0;
      border-top: 1px solid var(--line);
      font-size: 12px;
    }
    .row > span,
    .row > label {
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .field {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    select {
      padding: 8px;
      min-width: 90px;
      max-width: 100%;
      font-size: 12px;
    }
    .row > .field {
      max-width: 62%;
    }
    input[type="number"],
    input[type="text"] {
      min-width: 0;
      width: 92px;
      padding: 8px;
      font-size: 12px;
    }
    input[type="checkbox"] {
      appearance: none;
      min-height: 24px;
      width: 42px;
      height: 24px;
      flex-shrink: 0;
      padding: 0;
      position: relative;
      border-radius: 20px;
      background: var(--line);
      cursor: pointer;
    }
    input[type="checkbox"]::after {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      left: 3px;
      top: 3px;
      border-radius: 50%;
      background: var(--surface);
    }
    input[type="checkbox"]:checked {
      background: var(--accent);
    }
    input[type="checkbox"]:checked::after {
      left: 21px;
    }
    .state {
      color: var(--muted);
      font-size: 11px;
    }
    .siren {
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .siren-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      margin-bottom: 8px;
    }
    .siren .quick {
      margin-bottom: 0;
    }
    .stop {
      border-color: var(--accent);
    }
    details {
      font-size: 12px;
      margin-top: 8px;
    }
    summary {
      padding: 8px 0;
      cursor: pointer;
      color: var(--muted);
    }
    .feedback {
      font-size: 12px;
      margin-top: 10px;
      color: var(--muted);
    }
    .feedback.error {
      color: var(--error-color, #c13c34);
    }
    form {
      margin: 0;
    }
  `;
  private t(key: TranslationKey): string {
    return translate(this.language, key);
  }
  private label(entry: RegistryEntity): string {
    const key = settingLabel(entry);
    return (
      (key ? this.t(key) : undefined) ||
      entry.name ||
      entry.original_name ||
      String(
        this.hass?.states[entry.entity_id]?.attributes.friendly_name ??
          entry.entity_id,
      )
    );
  }
  private blocked(id: string): boolean {
    return this.disabled || !canCommand(this.hass?.states[id]);
  }
  private busy(id: string): boolean {
    return (this._pending.get(id) ?? 0) > 0;
  }
  private stateLabel(state: EntityState, active = isActive(state)): string {
    if (this.disabled || state.state === "unavailable")
      return this.t("unavailable");
    return this.t(
      state.state === "unknown" ? "unknown" : active ? "on" : "off",
    );
  }
  protected render() {
    if (!this.hass || !this.entities.length) return nothing;
    const entries = this.entities.filter(
      (entry) => this.hass!.states[entry.entity_id],
    );
    const quick = entries.filter(
      (entry) =>
        ["self_test", "mute"].includes(settingKind(entry)) &&
        domainOf(entry.entity_id) !== "select",
    );
    const sirens = entries.filter((entry) => settingKind(entry) === "siren");
    const indicators = entries.filter(
      (entry) => settingKind(entry) === "indicator",
    );
    const advanced = entries.filter(
      (entry) =>
        !quick.includes(entry) &&
        !sirens.includes(entry) &&
        !indicators.includes(entry),
    );
    return html`
      ${quick.length ? html`<div class="quick">${quick.map((entry) => html`<button data-entity=${entry.entity_id} ?disabled=${this.blocked(entry.entity_id) || this.busy(entry.entity_id)} @click=${() => this._send(entry.entity_id, domainOf(entry.entity_id) === "button" ? "press" : "turn_on")}>${icon(settingKind(entry) === "self_test" ? "check" : "bell", 16)}${this.label(entry)}</button>`)}</div>` : nothing}
      ${sirens.map((entry) => this.renderSiren(entry))}
      ${indicators.map((entry) => this.renderSetting(entry))}
      ${
        advanced.length
          ? html`<details class="advanced-settings">
              <summary>${this.t("more_settings")}</summary>
              ${advanced.map((entry) => this.renderSetting(entry))}
            </details>`
          : nothing
      }
      ${this._feedback ? html`<div class=${`feedback${this._failed ? " error" : ""}`} role=${this._failed ? "alert" : "status"}>${this.t(this._pending.size ? "sending" : this._feedback)}</div>` : nothing}
    `;
  }
  private renderSetting(entry: RegistryEntity) {
    const id = entry.entity_id,
      state = this.hass!.states[id],
      domain = domainOf(id),
      label = this.label(entry),
      disabled = this.blocked(id) || this.busy(id);
    if (domain === "switch")
      return html`<div class="row">
        <label for=${id}>${label}</label
        ><span class="field"
          ><span class="state">${this.stateLabel(state)}</span
          ><input
            id=${id}
            type="checkbox"
            role="switch"
            aria-label=${label}
            .checked=${live(isActive(state))}
            ?disabled=${disabled}
            @change=${(event: Event) => this._send(id, (event.target as HTMLInputElement).checked ? "turn_on" : "turn_off")}
        /></span>
      </div>`;
    if (domain === "button")
      return html`<div class="row">
        <span>${label}</span
        ><button
          data-entity=${id}
          ?disabled=${disabled}
          @click=${() => this._send(id, "press")}
        >
          ${this.t("execute")}
        </button>
      </div>`;
    if (domain === "select") {
      const options = Array.isArray(state.attributes.options)
        ? state.attributes.options.map(String)
        : [];
      return html`<div class="row">
        <label for=${id}>${label}</label
        ><span class="field"
          ><select
            id=${id}
            aria-label=${label}
            .value=${live(state.state)}
            ?disabled=${disabled}
            @change=${(event: Event) => {
              const option = (event.target as HTMLSelectElement).value;
              if (options.includes(option))
                void this._send(id, "select_option", { option });
            }}
          >
            ${!options.includes(state.state) ? html`<option value=${state.state} selected disabled>${this.t(state.state === "unavailable" ? "unavailable" : "unknown")}</option>` : nothing}${options.map((option) => html`<option value=${option} .selected=${option === state.state}>${this.optionLabel(option)}</option>`)}
          </select></span
        >
      </div>`;
    }
    if (domain === "number" || domain === "text") {
      const value =
        this._drafts.get(id) ??
        (state.state === "unknown" || state.state === "unavailable"
          ? ""
          : state.state);
      return html`<form
        novalidate
        class="row"
        @submit=${(event: SubmitEvent) => {
          event.preventDefault();
          try {
            const raw = this._drafts.get(id) ?? value;
            const next = domain === "number" ? numericValue(state, raw) : raw;
            void this._send(id, "set_value", { value: next }).then(
              (success) => {
                if (success) {
                  this._drafts.delete(id);
                  this.requestUpdate();
                }
              },
            );
          } catch {
            this._feedback = "invalid_value";
            this._failed = true;
          }
        }}
      >
        <label for=${id}>${label}</label
        ><span class="field"
          ><input
            id=${id}
            aria-label=${label}
            type=${domain === "number" ? "number" : "text"}
            min=${state.attributes.min ?? nothing}
            max=${state.attributes.max ?? nothing}
            step=${state.attributes.step ?? "any"}
            .value=${value}
            placeholder=${this.t(this.blocked(id) ? "unavailable" : "unknown")}
            ?disabled=${disabled}
            required
            @input=${(event: Event) => this._drafts.set(id, (event.target as HTMLInputElement).value)}
          /><span class="state"
            >${state.attributes.unit_of_measurement ?? ""}</span
          ><button type="submit" ?disabled=${disabled}>
            ${this.t("apply")}
          </button></span
        >
      </form>`;
    }
    return html`<div class="row">
      <span>${label}</span
      ><button
        @click=${() => this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: id }, bubbles: true, composed: true }))}
      >
        ${this.t("more_info")}
      </button>
    </div>`;
  }
  private renderSiren(entry: RegistryEntity) {
    const id = entry.entity_id,
      state = this.hass!.states[id],
      select = domainOf(id) === "select",
      features = Number(state.attributes.supported_features ?? 0),
      draft = this._sirens.get(id) ?? {};
    const options =
      select && Array.isArray(state.attributes.options)
        ? state.attributes.options.map(String)
        : [];
    const stop = options.find((option) =>
      ["stop", "off"].includes(option.toLowerCase()),
    );
    const tones = select
      ? options
          .filter((option) => option !== stop)
          .map((value) => ({ value, label: this.optionLabel(value) }))
      : sirenTones(state);
    const selected =
      draft.tone ??
      (select
        ? state.state !== stop && options.includes(state.state)
          ? state.state
          : (tones[0]?.value ?? "")
        : "");
    const blocked = this.blocked(id),
      busy = this.busy(id);
    const patch = (key: keyof SirenDraft, value: string) =>
      this._sirens.set(id, { ...this._sirens.get(id), [key]: value });
    const start = () => {
      try {
        if (select) {
          if (!tones.some((tone) => tone.value === selected)) throw new Error();
          void this._send(id, "select_option", { option: selected });
        } else {
          const latest = this._sirens.get(id) ?? {};
          void this._send(
            id,
            "turn_on",
            sirenParameters(state, {
              ...latest,
              tone: latest.tone ?? selected,
            }),
          );
        }
      } catch {
        this._feedback = "invalid_value";
        this._failed = true;
      }
    };
    return html`<div class="siren" data-entity=${id}>
      <div class="siren-title">
        <span>${icon("bell", 15)} ${this.t("siren")}</span
        ><span class="state"
          >${this.stateLabel(state, select ? state.state !== stop : isActive(state))}</span
        >
      </div>
      <div class="quick">
        ${select || features & 1 ? html`<button class="siren-on" ?disabled=${blocked || busy || (select && !tones.length)} @click=${start}>${this.t("siren_on")}</button>` : nothing}${select ? (stop ? html`<button class="stop siren-off" ?disabled=${blocked} @click=${() => this._send(id, "select_option", { option: stop }, true)}>${this.t("siren_off")}</button>` : nothing) : features & 2 ? html`<button class="stop siren-off" ?disabled=${blocked} @click=${() => this._send(id, "turn_off", {}, true)}>${this.t("siren_off")}</button>` : nothing}
      </div>
      ${
        tones.length || (!select && (features & 8 || features & 16))
          ? html`<details>
              <summary>${this.t("siren_options")}</summary>
              ${
                tones.length
                  ? html`<div class="row">
                      <label for=${`tone-${id}`}>${this.t("tone")}</label
                      ><select
                        id=${`tone-${id}`}
                        aria-label=${this.t("tone")}
                        .value=${selected}
                        ?disabled=${blocked || busy}
                        @change=${(event: Event) => {
                          patch(
                            "tone",
                            (event.target as HTMLSelectElement).value,
                          );
                          this.requestUpdate();
                        }}
                      >
                        ${!select ? html`<option value="" .selected=${selected === ""}>${this.t("device_default")}</option>` : nothing}${tones.map((tone) => html`<option value=${tone.value} .selected=${selected === tone.value}>${this.optionLabel(tone.label)}</option>`)}
                      </select>
                    </div>`
                  : nothing
              }${
                !select && features & 16
                  ? html`<div class="row">
                      <label for=${`duration-${id}`}
                        >${this.t("duration")}</label
                      ><span class="field"
                        ><input
                          id=${`duration-${id}`}
                          aria-label=${this.t("duration")}
                          type="number"
                          min="1"
                          max="65535"
                          step="1"
                          placeholder=${this.t("device_default")}
                          .value=${draft.duration ?? ""}
                          ?disabled=${blocked || busy}
                          @input=${(event: Event) => patch("duration", (event.target as HTMLInputElement).value)}
                        /><span class="state">${this.t("seconds")}</span></span
                      >
                    </div>`
                  : nothing
              }${
                !select && features & 8
                  ? html`<div class="row">
                      <label for=${`volume-${id}`}>${this.t("volume")}</label
                      ><span class="field"
                        ><input
                          id=${`volume-${id}`}
                          aria-label=${this.t("volume")}
                          type="number"
                          min="0"
                          max="100"
                          step="1"
                          placeholder=${this.t("device_default")}
                          .value=${draft.volume ?? ""}
                          ?disabled=${blocked || busy}
                          @input=${(event: Event) => patch("volume", (event.target as HTMLInputElement).value)}
                        /><span class="state">%</span></span
                      >
                    </div>`
                  : nothing
              }
            </details>`
          : nothing
      }
    </div>`;
  }
  private optionLabel(value: string): string {
    const labels: Record<string, TranslationKey> = {
      stop: "stop",
      Stop: "stop",
      off: "off",
      on: "on",
      smoke_siren: "smoke_sound",
      co_siren: "co_sound",
      mute: "temporary_mute",
      low: "low",
      medium: "medium",
      high: "high",
      "Low level sound": "low",
      "Medium level sound": "medium",
      "High level sound": "high",
      "Very high level sound": "very_high",
      "Low level strobe": "low",
      "Medium level strobe": "medium",
      "High level strobe": "high",
      "Very high level strobe": "very_high",
      "No Strobe": "off",
      Strobe: "on",
      Burglar: "burglar",
      Fire: "fire_sound",
      Emergency: "emergency",
      "Police Panic": "police_panic",
      "Fire Panic": "fire_panic",
      "Emergency Panic": "emergency_panic",
    };
    return labels[value] ? this.t(labels[value]) : value;
  }
  private async _send(
    id: string,
    service: string,
    data: Record<string, unknown> = {},
    priority = false,
  ): Promise<boolean> {
    if (!this.hass || this.blocked(id) || (this.busy(id) && !priority))
      return false;
    const sequence = ++this._sequence;
    this._pending = new Map(this._pending).set(
      id,
      (this._pending.get(id) ?? 0) + 1,
    );
    this._feedback = "sending";
    this._failed = false;
    try {
      await this.hass.callService(domainOf(id), service, {
        ...data,
        entity_id: id,
      });
      if (sequence === this._sequence) this._feedback = "command_sent";
      return true;
    } catch {
      if (sequence === this._sequence) {
        this._feedback = "service_error";
        this._failed = true;
      }
      return false;
    } finally {
      const pending = new Map(this._pending),
        count = (pending.get(id) ?? 1) - 1;
      if (count) pending.set(id, count);
      else pending.delete(id);
      this._pending = pending;
    }
  }
}
