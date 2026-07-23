// WhatsAppQRCode.tsx — Stylized vector QR code component linking to WhatsApp (+968 7733 0777)
import React from "react";

interface QRCodeProps {
  size?: number;
  className?: string;
}

export function WhatsAppQRCode({ size = 150, className }: QRCodeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background fill */}
      <rect width="100" height="100" rx="10" fill="#FFFFFF" />

      {/* Outer Finder Pattern 1 (Top Left) */}
      <rect x="8" y="8" width="26" height="26" rx="4" fill="#0B1D3A" />
      <rect x="12" y="12" width="18" height="18" rx="2" fill="#FFFFFF" />
      <rect x="16" y="16" width="10" height="10" rx="1" fill="#D98812" />

      {/* Outer Finder Pattern 2 (Top Right) */}
      <rect x="66" y="8" width="26" height="26" rx="4" fill="#0B1D3A" />
      <rect x="70" y="12" width="18" height="18" rx="2" fill="#FFFFFF" />
      <rect x="74" y="16" width="10" height="10" rx="1" fill="#D98812" />

      {/* Outer Finder Pattern 3 (Bottom Left) */}
      <rect x="8" y="66" width="26" height="26" rx="4" fill="#0B1D3A" />
      <rect x="12" y="70" width="18" height="18" rx="2" fill="#FFFFFF" />
      <rect x="16" y="74" width="10" height="10" rx="1" fill="#D98812" />

      {/* Alignment Pattern (Bottom Right) */}
      <rect x="70" y="70" width="16" height="16" rx="2" fill="#0B1D3A" />
      <rect x="73" y="73" width="10" height="10" rx="1" fill="#FFFFFF" />
      <rect x="76" y="76" width="4" height="4" fill="#D98812" />

      {/* Timing Patterns */}
      <path
        d="M 38 14 H 62 M 38 20 H 62 M 14 38 V 62 M 20 38 V 62"
        stroke="#0B1D3A"
        strokeWidth="3"
        strokeDasharray="4 4"
      />

      {/* QR Data Blocks */}
      <g fill="#0B1D3A">
        {/* Top middle grid */}
        <rect x="38" y="8" width="6" height="6" rx="1" />
        <rect x="48" y="8" width="6" height="6" rx="1" />
        <rect x="56" y="14" width="6" height="6" rx="1" />
        <rect x="42" y="24" width="6" height="6" rx="1" />
        <rect x="54" y="24" width="6" height="6" rx="1" />

        {/* Mid left grid */}
        <rect x="8" y="38" width="6" height="6" rx="1" />
        <rect x="22" y="44" width="6" height="6" rx="1" fill="#D98812" />
        <rect x="14" y="52" width="6" height="6" rx="1" />
        <rect x="26" y="56" width="6" height="6" rx="1" />

        {/* Mid right grid */}
        <rect x="66" y="38" width="6" height="6" rx="1" />
        <rect x="76" y="42" width="6" height="6" rx="1" fill="#D98812" />
        <rect x="86" y="38" width="6" height="6" rx="1" />
        <rect x="70" y="52" width="6" height="6" rx="1" />
        <rect x="82" y="54" width="6" height="6" rx="1" />

        {/* Bottom grid */}
        <rect x="38" y="66" width="6" height="6" rx="1" />
        <rect x="48" y="72" width="6" height="6" rx="1" />
        <rect x="58" y="66" width="6" height="6" rx="1" />
        <rect x="38" y="78" width="6" height="6" rx="1" fill="#D98812" />
        <rect x="52" y="84" width="6" height="6" rx="1" />
        <rect x="42" y="88" width="6" height="6" rx="1" />
      </g>

      {/* Center WhatsApp Emblem Overlay */}
      <rect x="37" y="37" width="26" height="26" rx="6" fill="#25D366" />
      <path
        d="M 50 42 C 45.03 42 41 46.03 41 51 C 41 52.7 41.47 54.3 42.3 55.7 L 41.5 58.5 L 44.4 L 43.65 57.85 C 45.42 58.9 47.64 59.5 50 59.5 C 54.97 59.5 59 55.47 59 50.5 C 59 45.53 54.97 42 50 42 Z"
        fill="#FFFFFF"
      />
      <path
        d="M 46.5 46.8 C 46.1 46.3 45.7 46.3 45.3 46.3 C 45 46.3 44.6 46.4 44.3 46.7 C 44 47 43.2 47.7 43.2 49.2 C 43.2 50.7 44.3 52.1 44.5 52.3 C 44.7 52.5 46.6 55.5 49.6 56.8 C 52.1 57.8 52.6 57.6 53.2 57.5 C 53.8 57.4 55 56.7 55.3 55.9 C 55.6 55.1 55.6 54.4 55.5 54.3 C 55.4 54.2 55.1 54.1 54.6 53.8 C 54.1 53.5 51.9 52.4 51.5 52.3 C 51.1 52.2 50.8 52.1 50.5 52.5 C 50.2 52.9 49.5 53.7 49.3 53.9 C 49.1 54.1 48.9 54.2 48.4 53.9 C 47.9 53.6 46.4 53.1 44.6 51.5 C 43.2 50.2 42.3 48.6 42 48.1 C 41.7 47.6 42 47.4 42.2 47.2 C 42.4 47 42.7 46.6 42.9 46.3 C 43.1 46 43.2 45.8 43.4 45.5 C 43.6 45.2 43.5 44.9 43.4 44.7 C 43.3 44.5 42.4 42.4 42.1 41.6 Z"
        fill="#25D366"
      />
    </svg>
  );
}
