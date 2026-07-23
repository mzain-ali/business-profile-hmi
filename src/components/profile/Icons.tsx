// Icons.tsx — shared SVG icon sprite (defs) + <Icon> component.
// Render <IconSprite /> once near the root; use <Icon name="pin" /> anywhere after.
export type IconName = "gear" | "bolt" | "shield" | "pin" | "badge" | "chev" | "nut" | "clock" | "truck" | "wrench" | "tag" | "phone" | "envelope" | "globe";

export function IconSprite() {
  return (
    <svg style={{ display: "none" }} aria-hidden="true">
      <defs>
        <symbol id="i-gear" viewBox="0 0 24 24">
          <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
          <path d="M19.4 13.5a1.7 1.7 0 00.34 1.87l.06.06a2.06 2.06 0 11-2.9 2.9l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1 1.55V19.6a2.06 2.06 0 01-4.12 0v-.09a1.7 1.7 0 00-1.11-1.55 1.7 1.7 0 00-1.87.34l-.06.06a2.06 2.06 0 11-2.9-2.9l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.55-1H4.4a2.06 2.06 0 010-4.12h.09a1.7 1.7 0 001.55-1.11 1.7 1.7 0 00-.34-1.87l-.06-.06a2.06 2.06 0 112.9-2.9l.06.06a1.7 1.7 0 001.87.34H10.6a1.7 1.7 0 001-1.55V4.4a2.06 2.06 0 014.12 0v.09a1.7 1.7 0 001 1.55 1.7 1.7 0 001.87-.34l.06-.06a2.06 2.06 0 112.9 2.9l-.06.06a1.7 1.7 0 00-.34 1.87V10.6a1.7 1.7 0 001.55 1H19.6a2.06 2.06 0 010 4.12h-.09a1.7 1.7 0 00-1.55 1z" />
        </symbol>
        <symbol id="i-bolt" viewBox="0 0 24 24">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12.2l2 2 4-4.4" />
        </symbol>
        <symbol id="i-pin" viewBox="0 0 24 24">
          <path d="M12 22s7-7.5 7-12.5A7 7 0 105 9.5C5 14.5 12 22 12 22z" />
          <circle cx="12" cy="9.5" r="2.4" />
        </symbol>
        <symbol id="i-badge" viewBox="0 0 24 24">
          <circle cx="12" cy="9.5" r="6.5" />
          <path d="M9 9.3l2 2 3.6-3.8" />
          <path d="M8.3 15.4L7 21.5l5-2.6 5 2.6-1.3-6.1" />
        </symbol>
        <symbol id="i-chev" viewBox="0 0 24 24">
          <path d="M8 5l8 7-8 7" />
        </symbol>
        <symbol id="i-nut" viewBox="0 0 24 24">
          <path d="M9 3.5h6L20 9v6l-5 5.5H9L4 15V9l5-5.5z" />
          <circle cx="12" cy="12" r="2.6" />
        </symbol>
        <symbol id="i-clock" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </symbol>
        <symbol id="i-truck" viewBox="0 0 24 24">
          <rect x="1" y="3" width="14" height="13" rx="1" />
          <path d="M15 8h4l3 4v4h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </symbol>
        <symbol id="i-wrench" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </symbol>
        <symbol id="i-tag" viewBox="0 0 24 24">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="1.5" fill="currentColor" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </symbol>
        <symbol id="i-envelope" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </symbol>
        <symbol id="i-globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </symbol>
      </defs>
    </svg>
  );
}

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export function Icon({ name, size = 20, color = "currentColor", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <use href={`#i-${name}`} />
    </svg>
  );
}
