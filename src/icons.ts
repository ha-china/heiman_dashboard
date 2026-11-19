import { svg } from "lit";
import type { DeviceKind } from "./types";

const paths: Record<string, string> = {
  smoke: "M6 17h12M8 21h8M4 13h16M8 9c-4-4 4-4 0-8M16 9c-4-4 4-4 0-8",
  co: "M8 7a5 5 0 1 0 0 10M16 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z",
  temperature: "M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0ZM12 11v7",
  gas: "M12 2c1 6 7 7 7 13a7 7 0 0 1-14 0c0-4 3-6 4-8 0 4 2 4 3 5 1-4 0-7 0-10Z",
  water: "M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z",
  door: "M4 21h16M6 21V4l12-2v19M14 12h.01",
  motion: "M12 5h.01M9 10l3-2 3 4 3 1M12 9l-2 6-4 4M10 15l5 2 1 4",
  air: "M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h5a3 3 0 1 1-3 3",
  bell: "M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3ZM10 21h4",
  power: "M12 2v9M7 5a8 8 0 1 0 10 0",
  light: "M9 18h6M10 22h4M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z",
  cover: "M3 3h18v18H3V3ZM3 7h18M3 11h18M3 15h18M12 3v18",
  remote: "M7 2h10v20H7V2ZM10 6h4M10 11h.01M14 11h.01M10 16h.01M14 16h.01",
  battery: "M9 2h6M7 5h10v17H7V5ZM10 10h4M10 14h4",
  signal: "M4 20v-3M9 20v-7M14 20V9M19 20V4",
  check: "m5 12 4 4L19 6",
  info: "M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  alert: "m12 3 10 18H2L12 3ZM12 9v5M12 17h.01",
  settings: "M4 7h16M4 17h16M8 4v6M16 14v6",
  clock: "M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  humidity:
    "M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13ZM9 17l6-6M9 11h.01M15 17h.01",
  energy: "m13 2-9 12h7l-1 8 10-13h-8l1-7Z",
  stop: "M6 6h12v12H6V6Z",
  chevron: "m9 5 7 7-7 7",
};
export const icon = (name: string, size = 20) =>
  svg`<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${paths[name] ?? paths.info}></path></svg>`;

export function deviceDrawing(kind: DeviceKind) {
  const round = [
    "smoke",
    "co",
    "smoke_co",
    "heat",
    "gas",
    "siren",
    "leak",
    "motion",
    "fall",
  ].includes(kind);
  return svg`<svg class="product" viewBox="0 0 160 150" aria-hidden="true">
    <ellipse cx="80" cy="135" rx="47" ry="7" fill="currentColor" opacity=".08"></ellipse>
    ${
      round
        ? svg`
      <circle cx="80" cy="72" r="57" fill="var(--device-edge)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="53" fill="var(--device-face)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="40" fill="none" stroke="var(--device-stroke)" stroke-width="1"></circle>
      ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => svg`<path transform="rotate(${i * 30} 80 68)" d="M74 23h12" stroke="var(--device-slot)" stroke-width="2.5" stroke-linecap="round"></path>`)}
      <text x="80" y="62" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      <circle cx="80" cy="80" r="10" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle>
      <circle cx="80" cy="102" r="2" fill="var(--status-color)"></circle>
    `
        : svg`
      <rect x="40" y="15" width="80" height="112" rx="22" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect>
      <rect x="40" y="12" width="80" height="109" rx="22" fill="var(--device-face)" stroke="var(--device-stroke)"></rect>
      <text x="80" y="100" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      ${["climate", "air"].includes(kind) ? svg`<rect x="50" y="32" width="60" height="42" rx="6" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect><path d="M61 45h14m-14 7h14m-14 7h14m10-14h13m-13 7h13" stroke="var(--device-slot)" stroke-width="2"></path>` : svg`<circle cx="80" cy="57" r="17" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle><path d="M80 45v12m-6-9a10 10 0 1 0 12 0" stroke="var(--device-slot)" stroke-width="2" fill="none" stroke-linecap="round"></path>`}
      <circle cx="80" cy="109" r="2" fill="var(--status-color)"></circle>
    `
    }
  </svg>`;
}
