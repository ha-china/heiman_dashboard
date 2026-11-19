import {
  LitElement,
  type PropertyValues,
  type PropertyDeclarations,
} from "lit";
import { currentRegistry, loadRegistry } from "./entities";
import { languageFor, translate, type TranslationKey } from "./i18n";
import { normalizeConfig } from "./config";
import type { CardConfig, HomeAssistant, Registry } from "./types";

export class HeimanElement extends LitElement {
  static properties: PropertyDeclarations = {
    hass: { attribute: false },
    _config: { state: true },
    _registry: { state: true },
    _registryError: { state: true },
    _loading: { state: true },
  };
  declare hass?: HomeAssistant;
  protected _config: CardConfig = normalizeConfig({
    type: "custom:heiman-device-card",
  });
  protected _registry: Registry = { devices: [], entities: [] };
  protected _registryError = false;
  protected _loading = false;
  private _registryKey?: object;
  private _devicesRef?: HomeAssistant["devices"];
  private _entitiesRef?: HomeAssistant["entities"];
  private _request = 0;

  setConfig(config: CardConfig): void {
    this._config = normalizeConfig(config);
  }
  protected t(key: TranslationKey): string {
    return translate(languageFor(this._config, this.hass), key);
  }
  protected updated(changed: PropertyValues): void {
    if (changed.has("hass")) void this._syncRegistry();
  }
  connectedCallback(): void {
    super.connectedCallback();
    if (this.hass) void this._syncRegistry(true);
  }
  disconnectedCallback(): void {
    this._request++;
    this._registryKey = undefined;
    super.disconnectedCallback();
  }
  protected async _syncRegistry(retry = false): Promise<void> {
    const hass = this.hass;
    if (!hass) return;
    // Once native registries have been loaded, an empty replacement is authoritative.
    const current =
      currentRegistry(hass) ??
      (this._devicesRef && hass.devices && hass.entities
        ? {
            devices: Object.values(hass.devices),
            entities: Object.values(hass.entities),
          }
        : undefined);
    if (current) {
      if (
        retry ||
        this._devicesRef !== hass.devices ||
        this._entitiesRef !== hass.entities
      ) {
        this._request++;
        this._registry = current;
        this._devicesRef = hass.devices;
        this._entitiesRef = hass.entities;
        this._registryError = false;
        this._loading = false;
      }
      return;
    }
    const key = hass.connection ?? hass;
    if (!retry && key === this._registryKey) return;
    this._registryKey = key;
    const request = ++this._request;
    this._loading = true;
    this._registryError = false;
    try {
      const registry = await loadRegistry(hass, retry);
      if (request === this._request && this.isConnected)
        this._registry = registry;
    } catch {
      if (request === this._request && this.isConnected)
        this._registryError = true;
    } finally {
      if (request === this._request && this.isConnected) this._loading = false;
    }
  }
  protected _moreInfo(entityId: string): void {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
