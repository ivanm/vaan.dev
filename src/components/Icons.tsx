// Inline SVG glyphs. All are decorative (aria-hidden); the surrounding link or button carries the name.

export const Arrow = () => (
  <svg className="arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const DragHint = () => (
  <svg viewBox="0 0 22 8" aria-hidden="true">
    <path d="M1 4h20M4 1 1 4l3 3M18 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const ThemeGlyph = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path className="fill" d="M7 1a6 6 0 0 1 0 12z" />
  </svg>
);

export const LinkedInGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
    />
  </svg>
);

export const XGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z"
    />
  </svg>
);
