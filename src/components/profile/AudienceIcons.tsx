// AudienceIcons.tsx — Technical line-art SVG icons for target audience types: Contractors, Fleet Managers, Workshop Owners.
import React from "react";

interface AudienceIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export function ContractorIcon({
  className,
  color = "currentColor",
  size = 28,
  strokeWidth = 1.4,
}: AudienceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Safety Hard Hat / Construction Helmet */}
        <path d="M 6 20 C 6 12 10 9 16 9 C 22 9 26 12 26 20 Z" />
        <path d="M 3 20 L 29 20 L 27 22 L 5 22 Z" />
        <line x1="16" y1="9" x2="16" y2="15" />
        <path d="M 12 20 L 12 24 A 4 4 0 0 0 20 24 L 20 20" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

export function FleetManagerIcon({
  className,
  color = "currentColor",
  size = 28,
  strokeWidth = 1.4,
}: AudienceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Clipboard & Checklist */}
        <rect x="7" y="6" width="18" height="22" rx="2" />
        <rect x="11" y="4" width="10" height="4" rx="1" fill="none" />
        <line x1="11" y1="12" x2="21" y2="12" />
        <line x1="11" y1="17" x2="18" y2="17" />
        <line x1="11" y1="22" x2="16" y2="22" />
        {/* Checkmark */}
        <path d="M 19 19 L 21 21 L 25 16" strokeWidth={strokeWidth * 1.2} />
      </g>
    </svg>
  );
}

export function WorkshopOwnerIcon({
  className,
  color = "currentColor",
  size = 28,
  strokeWidth = 1.4,
}: AudienceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Open-Ended Wrench (Diagonal) */}
        <path d="M 22 5 C 24 5 26.5 7 26 10 C 25.5 12 24 13.5 22 14 L 11 25 C 9.5 26.5 7 26.5 5.5 25 C 4 23.5 4 21 5.5 19.5 L 16.5 8.5 C 17 6.5 19.5 5 22 5 Z" />
        <line x1="20" y1="4" x2="26" y2="10" />
        {/* Heavy Workshop Toolbox at Base */}
        <rect x="5" y="20" width="22" height="8" rx="1.5" />
        <path d="M 12 20 L 12 17 L 20 17 L 20 20" />
        <line x1="16" y1="20" x2="16" y2="28" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

export function AudienceIcon({ name, ...props }: AudienceIconProps & { name: string }) {
  switch (name) {
    case "contractor":
      return <ContractorIcon {...props} />;
    case "fleet":
      return <FleetManagerIcon {...props} />;
    case "workshop":
      return <WorkshopOwnerIcon {...props} />;
    default:
      return <ContractorIcon {...props} />;
  }
}
