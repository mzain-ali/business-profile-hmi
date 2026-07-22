// MachineIcons.tsx — Technical line-art SVG silhouettes for 6 heavy machinery types.
import React from "react";

interface IconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export function ForkliftIcon({
  className,
  color = "currentColor",
  size = 36,
  strokeWidth = 1.2,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Wheels */}
        <circle cx="9" cy="27" r="3.5" />
        <circle cx="21" cy="27" r="4.5" />
        <circle cx="9" cy="27" r="1" fill={color} />
        <circle cx="21" cy="27" r="1.5" fill={color} />
        {/* Rear Counterweight & Body */}
        <path d="M 4 27 L 4 20 Q 5 17 9 17 L 15 17 L 24 21 L 24 27" />
        {/* Overhead Guard Cab */}
        <path d="M 8 17 L 8 9 L 18 9 L 16 17" />
        <line x1="12" y1="9" x2="12" y2="17" strokeDasharray="2 2" />
        {/* Hydraulic Mast */}
        <line x1="25" y1="7" x2="25" y2="28" strokeWidth={strokeWidth * 1.3} />
        <line x1="27" y1="9" x2="27" y2="28" />
        {/* Fork Carriage & Forks */}
        <rect x="27" y="19" width="3" height="7" rx="1" />
        <path d="M 29 26 L 35 26 L 35 24" strokeWidth={strokeWidth * 1.2} />
      </g>
    </svg>
  );
}

export function WheelLoaderIcon({
  className,
  color = "currentColor",
  size = 36,
  strokeWidth = 1.2,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Wheels */}
        <circle cx="9" cy="26" r="4.5" />
        <circle cx="23" cy="26" r="4.5" />
        <circle cx="9" cy="26" r="1.5" fill={color} />
        <circle cx="23" cy="26" r="1.5" fill={color} />
        {/* Main Body */}
        <path d="M 4 26 L 4 19 L 12 19 L 17 21 L 26 21 L 26 26" />
        {/* Cab */}
        <path d="M 8 19 L 10 11 L 16 11 L 18 19" />
        {/* Loader Arm & Front Bucket */}
        <path d="M 17 22 L 27 16 L 33 21 L 28 27 M 27 16 L 31 27" />
        <line x1="20" y1="21" x2="28" y2="25" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

export function BackhoeIcon({
  className,
  color = "currentColor",
  size = 36,
  strokeWidth = 1.2,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Wheels */}
        <circle cx="11" cy="25" r="5" />
        <circle cx="24" cy="27" r="3.5" />
        <circle cx="11" cy="25" r="1.5" fill={color} />
        <circle cx="24" cy="27" r="1" fill={color} />
        {/* Cab & Chassis */}
        <path d="M 6 25 L 8 13 L 17 13 L 19 25 M 6 25 L 20 25" />
        {/* Front Loader Bucket */}
        <path d="M 21 24 L 28 20 L 33 24 M 28 20 L 31 29 L 26 29" />
        {/* Rear Backhoe Digger Arm */}
        <path d="M 7 21 L 3 14 L 6 9 L 2 7" />
        <path d="M 2 7 L 1 10 L 4 11" />
      </g>
    </svg>
  );
}

export function RoadRollerIcon({
  className,
  color = "currentColor",
  size = 36,
  strokeWidth = 1.2,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Front Steel Roller Drum */}
        <circle cx="9" cy="25" r="5.5" />
        <circle cx="9" cy="25" r="2" />
        {/* Rear Wheel */}
        <circle cx="26" cy="25" r="5.5" />
        <circle cx="26" cy="25" r="2" />
        {/* Body Chassis */}
        <path d="M 9 25 L 9 18 L 17 18 L 17 25 M 17 18 L 29 18 L 29 25" />
        {/* ROPS Canopy */}
        <path d="M 14 18 L 14 10 L 26 10 L 26 18 M 12 10 L 28 10" />
      </g>
    </svg>
  );
}

export function CraneIcon({
  className,
  color = "currentColor",
  size = 36,
  strokeWidth = 1.2,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Multiple Axle Wheels */}
        <circle cx="7" cy="27" r="2.5" />
        <circle cx="14" cy="27" r="2.5" />
        <circle cx="22" cy="27" r="2.5" />
        <circle cx="28" cy="27" r="2.5" />
        {/* Carrier Chassis */}
        <path d="M 4 25 L 31 25 L 31 21 L 4 21 Z" />
        {/* Driver Cab */}
        <path d="M 25 21 L 25 16 L 31 16" />
        {/* Telescopic Crane Boom Arm */}
        <path d="M 7 21 L 30 7 L 33 9 L 10 21" />
        {/* Cable & Hook */}
        <line x1="31.5" y1="8" x2="31.5" y2="17" strokeDasharray="2 1" />
        <path d="M 31.5 17 Q 30 19 31.5 20 Q 33 19 31.5 18" strokeWidth={strokeWidth * 1.2} />
      </g>
    </svg>
  );
}

export function ExcavatorIcon({
  className,
  color = "currentColor",
  size = 36,
  strokeWidth = 1.2,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Track Undercarriage */}
        <rect x="5" y="24" width="16" height="6" rx="3" />
        <circle cx="8" cy="27" r="1.5" />
        <circle cx="18" cy="27" r="1.5" />
        <line x1="8" y1="27" x2="18" y2="27" strokeDasharray="2 2" />
        {/* Upper Revolving Cab House */}
        <path d="M 7 24 L 7 15 L 16 15 L 16 24 Z" />
        {/* Articulated Boom, Dipper Arm & Bucket */}
        <path d="M 14 17 L 21 9 L 29 13 L 33 20" strokeWidth={strokeWidth * 1.1} />
        <path d="M 29 13 L 26 21 L 32 22 M 26 21 L 30 20" />
      </g>
    </svg>
  );
}

export function MachineIcon({ name, ...props }: IconProps & { name: string }) {
  switch (name) {
    case "forklift":
      return <ForkliftIcon {...props} />;
    case "loader":
      return <WheelLoaderIcon {...props} />;
    case "backhoe":
      return <BackhoeIcon {...props} />;
    case "roller":
      return <RoadRollerIcon {...props} />;
    case "crane":
      return <CraneIcon {...props} />;
    case "excavator":
      return <ExcavatorIcon {...props} />;
    default:
      return <ForkliftIcon {...props} />;
  }
}
