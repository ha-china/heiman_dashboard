import { HeimanDeviceCard, CARD_METADATA } from "./card";
import { HeimanCardEditor } from "./editor";
import { HeimanEntityControls } from "./entity-controls";

declare const __VERSION__: string;
declare global {
  interface Window {
    customCards?: (typeof CARD_METADATA)[];
  }
  interface HTMLElementTagNameMap {
    "heiman-device-card": HeimanDeviceCard;
    "heiman-device-card-editor": HeimanCardEditor;
    "heiman-entity-controls": HeimanEntityControls;
  }
}
if (!customElements.get("heiman-entity-controls"))
  customElements.define("heiman-entity-controls", HeimanEntityControls);
if (!customElements.get("heiman-device-card-editor"))
  customElements.define("heiman-device-card-editor", HeimanCardEditor);
if (!customElements.get("heiman-device-card"))
  customElements.define("heiman-device-card", HeimanDeviceCard);
window.customCards ??= [];
if (!window.customCards.some((card) => card.type === CARD_METADATA.type))
  window.customCards.push(CARD_METADATA);
console.info(`HEIMAN Dashboard ${__VERSION__}`);
