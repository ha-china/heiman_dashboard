import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
    font-family: var(
      --paper-font-body1_-_font-family,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif
    );
  }
  * {
    box-sizing: border-box;
  }
  ha-card {
    --surface: #faf9f5;
    --ink: #303b33;
    --muted: #757d73;
    --line: #e6e8df;
    --tile: #f0f2e9;
    --accent: #5b7354;
    --device-face: #fefefb;
    --device-edge: #e7e9e1;
    --device-stroke: #d6d9cf;
    --device-slot: #a0a89a;
    --status-color: #4d785c;
    --status-bg: #e6eee3;
    display: block;
    min-width: 0;
    overflow: hidden;
    color: var(--ink);
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--ha-card-border-radius, 20px);
    box-shadow: var(--ha-card-box-shadow, none);
  }
  ha-card[data-dark] {
    --surface: #252c27;
    --ink: #e4e9e2;
    --muted: #a3afa1;
    --line: #3b443c;
    --tile: #303b32;
    --accent: #adca9f;
    --device-face: #dce2d8;
    --device-edge: #bcc5b7;
    --device-stroke: #a5b29f;
    --device-slot: #71816b;
    --status-color: #b6d8ac;
    --status-bg: #354b36;
  }
  ha-card.fire {
    --surface: #161f2c;
    --ink: #f0f4fa;
    --muted: #a2afc1;
    --line: #344152;
    --tile: #202d3e;
    --accent: #ff6e5f;
    --device-face: #dce3ec;
    --device-edge: #a9b7c8;
    --device-stroke: #93a3b7;
    --device-slot: #6b7d93;
    --status-color: #8cddbe;
    --status-bg: #203d37;
    border-top: 3px solid #ed6555;
    border-radius: var(--ha-card-border-radius, 16px);
  }
  ha-card.minimal {
    --surface: var(--ha-card-background, var(--card-background-color, #fff));
    --ink: var(--primary-text-color, #212121);
    --muted: var(--secondary-text-color, #616161);
    --line: var(--divider-color, #ddd);
    --tile: var(--secondary-background-color, #f5f5f5);
    --accent: var(--primary-color, #0288d1);
    border-radius: var(--ha-card-border-radius, 12px);
  }
  ha-card[data-severity="alarm"] {
    --status-color: #b32929;
    --status-bg: #fde5e1;
  }
  ha-card[data-severity="warning"] {
    --status-color: #875400;
    --status-bg: #fff0cf;
  }
  ha-card[data-severity="active"] {
    --status-color: #286c92;
    --status-bg: #e3eff7;
  }
  ha-card[data-severity="unknown"],
  ha-card[data-severity="unavailable"] {
    --status-color: var(--muted);
    --status-bg: var(--tile);
  }
  ha-card[data-severity="unavailable"] {
    filter: grayscale(1);
  }
  ha-card.fire[data-severity="alarm"],
  ha-card[data-dark][data-severity="alarm"] {
    --status-color: #ffaaa0;
    --status-bg: #4b292c;
  }
  ha-card.fire[data-severity="warning"],
  ha-card[data-dark][data-severity="warning"] {
    --status-color: #f4ce89;
    --status-bg: #493a26;
  }
  ha-card.fire[data-severity="active"],
  ha-card[data-dark][data-severity="active"] {
    --status-color: #a0d9ff;
    --status-bg: #233c54;
  }
  button {
    font: inherit;
    cursor: pointer;
    color: inherit;
  }
  button:disabled {
    cursor: default;
    opacity: 0.5;
  }
  button:focus-visible,
  summary:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }
  .body {
    padding: 14px 16px 8px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .brand {
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1.7px;
    color: var(--accent);
  }
  .model {
    font-size: 10px;
    color: var(--muted);
    text-align: right;
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .heading {
    margin-top: 9px;
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .identity {
    min-width: 0;
    flex: 1;
  }
  h2 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin: 0;
    overflow-wrap: anywhere;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .subheading {
    margin-top: 3px;
    color: var(--muted);
    font-size: 11px;
    overflow-wrap: anywhere;
  }
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: var(--muted);
    flex-shrink: 0;
  }
  .icon-button:hover {
    background: var(--tile);
  }
  .overview {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 9px;
  }
  .illustration {
    width: 48px;
    flex: 0 0 48px;
  }
  .product {
    display: block;
    width: 100%;
  }
  .status {
    min-width: 0;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 8px;
    border-radius: 6px;
    background: var(--status-bg);
    color: var(--status-color);
  }
  .status-label {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--status-color);
    overflow-wrap: anywhere;
  }
  ha-card[data-severity="alarm"] {
    border-color: var(--status-color);
    box-shadow: inset 3px 0 var(--status-color);
  }
  .metrics {
    display: grid;
    grid-template-columns: repeat(var(--metric-columns), minmax(0, 1fr));
    gap: 1px;
    margin-top: 10px;
    background: var(--line);
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
  }
  .metric {
    border: 0;
    text-align: left;
    padding: 7px 8px;
    background: var(--tile);
    min-width: 0;
  }
  .metric:hover {
    filter: brightness(0.97);
  }
  .metric-label {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: var(--muted);
    overflow-wrap: anywhere;
  }
  .metric-label svg {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }
  .metric-value {
    display: block;
    font-size: 15px;
    font-weight: 500;
    margin-top: 3px;
    overflow-wrap: anywhere;
  }
  .alerts {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
  .alert {
    display: inline-flex;
    gap: 5px;
    align-items: center;
    color: var(--status-color);
    background: var(--status-bg);
    padding: 4px 7px;
    border-radius: 6px;
    font-size: 11px;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    min-height: 36px;
    padding: 6px 8px;
    background: transparent;
    border: 1px solid var(--line);
    border-radius: 8px;
    font-size: 12px;
    flex: 1 1 auto;
  }
  .action:hover {
    background: var(--tile);
  }
  .footer {
    margin-top: 5px;
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
    font-size: 10px;
  }
  .stamp {
    margin-right: auto;
    padding: 8px 0;
    overflow-wrap: anywhere;
  }
  .panel-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border: 0;
    background: transparent;
    border-radius: 6px;
    min-height: 36px;
    padding: 6px;
    font-size: 11px;
    color: var(--muted);
  }
  .panel-toggle:hover,
  .panel-toggle[aria-expanded="true"] {
    color: var(--accent);
    background: var(--tile);
  }
  .details-toggle[aria-expanded="true"] svg {
    transform: rotate(90deg);
  }
  [hidden] {
    display: none !important;
  }
  .readings {
    padding-top: 4px;
  }
  .entity-row {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    padding: 10px 0;
    text-align: left;
    width: 100%;
    background: transparent;
    border: 0;
    border-top: 1px solid var(--line);
    font-size: 12px;
  }
  .entity-row span {
    overflow-wrap: anywhere;
  }
  .entity-row span:first-child {
    color: var(--muted);
  }
  .entity-row span:last-child {
    text-align: right;
  }
  .empty {
    padding: 28px 22px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.7;
  }
  .empty .brand {
    margin-bottom: 16px;
  }
  .error {
    font-size: 12px;
    color: var(--error-color, #c13c34);
    margin-top: 10px;
  }
  .partial {
    font-size: 10px;
    color: var(--muted);
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;
