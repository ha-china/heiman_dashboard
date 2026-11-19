export type DeviceKind =
  | "smoke"
  | "co"
  | "smoke_co"
  | "heat"
  | "gas"
  | "leak"
  | "contact"
  | "motion"
  | "fall"
  | "vibration"
  | "climate"
  | "air"
  | "siren"
  | "plug"
  | "switch"
  | "light"
  | "cover"
  | "remote";
export type CardStyle = "home" | "fire" | "minimal";
export type Language =
  "zh" | "en" | "de" | "fr" | "es" | "it" | "nl" | "pt" | "pl";
export type Role =
  | "smoke"
  | "co"
  | "heat"
  | "gas"
  | "leak"
  | "contact"
  | "motion"
  | "fall"
  | "vibration"
  | "temperature"
  | "humidity"
  | "battery"
  | "battery_low"
  | "tamper"
  | "fault"
  | "test"
  | "muted"
  | "signal"
  | "power"
  | "energy"
  | "voltage"
  | "current"
  | "illuminance"
  | "co2"
  | "voc"
  | "pm25"
  | "action"
  | "control";
export interface CardConfig {
  type: "custom:heiman-device-card";
  model?: string;
  device_id?: string;
  entity?: string;
  entities?: Partial<Record<Role, string>>;
  name?: string;
  style?: CardStyle;
  language?: "auto" | Language;
  show_battery?: boolean;
  show_signal?: boolean;
  show_details?: boolean;
  show_controls?: boolean;
  [key: string]: unknown;
}
export interface DevicePreset {
  id: string;
  description: string;
  kind: DeviceKind;
  aliases: string[];
  zha: "standard" | "quirk";
  zhaSources: string[];
}
export interface EntityState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed?: string;
  last_updated?: string;
}
export interface RegistryEntity {
  entity_id: string;
  device_id?: string | null;
  platform?: string;
  original_name?: string | null;
  translation_key?: string | null;
  unique_id?: string;
  disabled_by?: string | null;
  hidden_by?: string | null;
  hidden?: boolean;
  entity_category?: string | null;
  name?: string | null;
}
export interface RegistryDevice {
  id: string;
  manufacturer?: string | null;
  model?: string | null;
  model_id?: string | null;
  name?: string | null;
  name_by_user?: string | null;
  area_id?: string | null;
  parent_device_id?: string | null;
  disabled_by?: string | null;
}
export interface Registry {
  devices: RegistryDevice[];
  entities: RegistryEntity[];
}
export interface HomeAssistant {
  states: Record<string, EntityState>;
  devices?: Record<string, RegistryDevice>;
  entities?: Record<string, RegistryEntity>;
  areas?: Record<string, { name: string }>;
  language?: string;
  locale?: { language: string };
  themes?: { darkMode?: boolean };
  connection?: object;
  callWS?: <T>(message: { type: string }) => Promise<T>;
  callService: (
    domain: string,
    service: string,
    data: Record<string, unknown>,
  ) => Promise<unknown>;
  formatEntityState?: (state: EntityState) => string;
}
export type BoundEntities = Partial<Record<Role, string[]>>;
export interface Resolution {
  device?: RegistryDevice;
  preset?: DevicePreset;
  candidates: RegistryDevice[];
  entities: RegistryEntity[];
  bindings: BoundEntities;
  reason?: "choose_device" | "no_device" | "missing_device" | "model_mismatch";
}
