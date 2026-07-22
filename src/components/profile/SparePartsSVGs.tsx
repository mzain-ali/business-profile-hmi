// SparePartsSVGs.tsx — High quality technical blueprint line drawings for heavy machinery & forklift spare parts
import React from "react";

interface SVGProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

// 1. Piston, Connecting Rod & Piston Rings SVG
export function PistonAndRingsSVG({ className, color = "currentColor", strokeWidth = 1.2 }: SVGProps) {
  return (
    <svg className={className} viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Piston Crown & Body */}
        <rect x="75" y="35" width="150" height="95" rx="6" />
        {/* Piston Top Dish Curve */}
        <path d="M 85 35 Q 150 43 215 35" strokeDasharray="3 3" />

        {/* Ring Grooves & Piston Rings */}
        {/* Ring 1 - Top Compression Ring */}
        <rect x="68" y="48" width="164" height="6" rx="2" />
        <line x1="145" y1="48" x2="145" y2="54" strokeDasharray="2 2" />

        {/* Ring 2 - Second Compression Ring */}
        <rect x="68" y="62" width="164" height="6" rx="2" />
        <line x1="155" y1="62" x2="155" y2="68" strokeDasharray="2 2" />

        {/* Ring 3 - Oil Control Ring */}
        <rect x="68" y="76" width="164" height="8" rx="2" />
        {/* Oil ring slots */}
        <line x1="82" y1="80" x2="97" y2="80" />
        <line x1="107" y1="80" x2="122" y2="80" />
        <line x1="132" y1="80" x2="147" y2="80" />
        <line x1="157" y1="80" x2="172" y2="80" />
        <line x1="182" y1="80" x2="197" y2="80" />

        {/* Piston Skirt Inner Pin Boss */}
        <path d="M 85 130 L 95 130 L 95 98 L 205 98 L 205 130 L 215 130" />
        <line x1="75" y1="130" x2="225" y2="130" />

        {/* Wrist Pin (Gudgeon Pin) */}
        <rect x="92" y="96" width="116" height="26" rx="13" />
        <circle cx="150" cy="109" r="8" />
        <line x1="102" y1="109" x2="198" y2="109" strokeDasharray="4 3" />

        {/* Connecting Rod Small End Eye */}
        <circle cx="150" cy="109" r="19" />

        {/* Connecting Rod Beam (I-Beam section) */}
        <path d="M 138 126 L 128 250 L 120 270 A 40 40 0 0 0 180 270 L 172 250 L 162 126 Z" />
        {/* I-beam recessed channel */}
        <path d="M 144 140 L 136 242 L 164 242 L 156 140 Z" strokeDasharray="4 2" />
        <line x1="150" y1="126" x2="150" y2="270" strokeDasharray="6 3" />

        {/* Rod Big End & Bearing Journal */}
        <circle cx="150" cy="285" r="34" />
        <circle cx="150" cy="285" r="25" strokeDasharray="3 3" />
        {/* Rod Cap Split Line */}
        <line x1="102" y1="285" x2="198" y2="285" />

        {/* Rod Cap Bolts */}
        <rect x="108" y="265" width="8" height="40" rx="2" />
        <line x1="112" y1="260" x2="112" y2="310" />
        <rect x="184" y="265" width="8" height="40" rx="2" />
        <line x1="188" y1="260" x2="188" y2="310" />
        {/* Rod Cap Bottom Arc */}
        <path d="M 110 285 A 40 40 0 0 0 190 285" />

        {/* Piston Rings Floating Graphic (Right Side) */}
        <g opacity="0.9">
          {/* Expanded Ring 1 */}
          <ellipse cx="240" cy="165" rx="48" ry="14" />
          <ellipse cx="240" cy="165" rx="42" ry="12" />
          <path d="M 284 159 L 288 167" strokeWidth="2" />

          {/* Expanded Ring 2 */}
          <ellipse cx="240" cy="195" rx="48" ry="14" />
          <ellipse cx="240" cy="195" rx="42" ry="12" />
          <path d="M 284 189 L 288 197" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}

// 2. Forklift & Hydraulics Technical Blueprint SVG (Replaces excavator with FORKLIFT)
export function ForkliftAndHydraulicsSVG({ className, color = "currentColor", strokeWidth = 1.2 }: SVGProps) {
  return (
    <svg className={className} viewBox="0 0 350 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* --- TOP SECTION: Engine Cylinder Head & Valves --- */}
        <g transform="translate(15, 10)">
          <rect x="20" y="10" width="250" height="90" rx="6" />
          <line x1="20" y1="40" x2="270" y2="40" strokeDasharray="4 3" />
          {/* 4 Engine Cylinders */}
          <circle cx="60" cy="55" r="20" />
          <circle cx="115" cy="55" r="20" />
          <circle cx="170" cy="55" r="20" />
          <circle cx="225" cy="55" r="20" />
          <line x1="20" y1="55" x2="270" y2="55" strokeDasharray="6 4" opacity="0.5" />
        </g>

        {/* --- MAIN SECTION: Industrial Forklift Blueprint Drawing --- */}
        <g transform="translate(10, 120)">
          {/* Rear Steer Wheel */}
          <circle cx="65" cy="220" r="25" />
          <circle cx="65" cy="220" r="14" strokeDasharray="3 3" />
          <circle cx="65" cy="220" r="5" fill={color} />

          {/* Front Drive Wheel */}
          <circle cx="195" cy="220" r="32" />
          <circle cx="195" cy="220" r="20" strokeDasharray="4 3" />
          <circle cx="195" cy="220" r="6" fill={color} />

          {/* Forklift Main Chassis & Body Frame */}
          <path d="M 40 220 L 40 160 A 15 15 0 0 1 55 145 L 120 145 L 160 170 L 225 170 L 225 220 Z" />

          {/* Counterweight (Rear) */}
          <path d="M 35 210 L 35 155 Q 50 145 75 145 L 75 220 Z" />

          {/* Overhead Guard (ROPS Safety Cage) */}
          <path d="M 60 145 L 60 70 L 155 70 L 140 145" />
          <line x1="85" y1="70" x2="85" y2="145" />
          <line x1="115" y1="70" x2="115" y2="145" />
          <line x1="60" y1="95" x2="150" y2="95" strokeDasharray="4 2" />

          {/* Driver Seat & Steering Column */}
          <path d="M 80 140 L 95 140 L 105 115 L 80 115 Z" />
          <line x1="125" y1="140" x2="118" y2="110" />
          <ellipse cx="115" cy="108" rx="10" ry="4" transform="rotate(-30 115 108)" />

          {/* Hydraulic Mast Assembly (Vertical Rails) */}
          <rect x="225" y="45" width="14" height="185" rx="3" />
          <rect x="242" y="55" width="12" height="175" rx="2" />
          <line x1="232" y1="45" x2="232" y2="230" strokeDasharray="6 3" />

          {/* Main Hydraulic Lift Cylinder Inside Mast */}
          <rect x="236" y="80" width="8" height="135" rx="2" />
          <line x1="240" y1="70" x2="240" y2="215" strokeWidth={strokeWidth * 1.8} />

          {/* Tilt Hydraulic Cylinder */}
          <line x1="180" y1="180" x2="225" y2="160" strokeWidth={strokeWidth * 2.2} />
          <rect x="180" y="172" width="25" height="10" transform="rotate(-24 180 172)" rx="2" />

          {/* Fork Carriage & L-Shaped Forks */}
          <rect x="245" y="140" width="16" height="40" rx="3" fill={color} opacity="0.2" />
          <rect x="245" y="140" width="16" height="40" rx="3" />

          {/* Left Fork */}
          <path d="M 258 175 L 258 225 L 325 225 L 325 220 L 265 220 L 265 175 Z" />
          {/* Tapered Fork Tip */}
          <path d="M 325 225 L 338 223 L 325 220 Z" />

          {/* Hydraulic Lines & Hose Reel */}
          <path d="M 170 150 Q 210 130 236 100" strokeDasharray="3 2" />
        </g>
      </g>
    </svg>
  );
}

// 3. Gears, Bearings & Hydraulics SVG
export function GearsAndBearingsSVG({ className, color = "currentColor", strokeWidth = 1.2 }: SVGProps) {
  return (
    <svg className={className} viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Main Center Spur Gear */}
        <circle cx="160" cy="120" r="62" />
        <circle cx="160" cy="120" r="48" strokeDasharray="4 3" />
        <circle cx="160" cy="120" r="28" />
        <circle cx="160" cy="120" r="14" />
        {/* Keyway slot */}
        <rect x="156" y="103" width="8" height="8" />

        {/* Gear Teeth */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 160 120)`}>
            <path d="M 153 58 L 155 50 L 165 50 L 167 58 Z" />
          </g>
        ))}

        {/* Interlocking Small Gear */}
        <g transform="translate(85, -50)">
          <circle cx="160" cy="120" r="36" />
          <circle cx="160" cy="120" r="26" strokeDasharray="3 2" />
          <circle cx="160" cy="120" r="12" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 160 120)`}>
              <path d="M 156 84 L 158 78 L 162 78 L 164 84 Z" />
            </g>
          ))}
        </g>

        {/* Roller Bearing Ring */}
        <g transform="translate(-85, 75)">
          <circle cx="160" cy="120" r="40" />
          <circle cx="160" cy="120" r="26" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 160 120)`}>
              <circle cx="160" cy="87" r="5" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

// 4. White Background Watermark Technical Blueprint (with Forklift & Pistons)
export function BackgroundBlueprintSVG({ className, color = "currentColor", strokeWidth = 1.0 }: SVGProps) {
  return (
    <svg className={className} viewBox="0 0 540 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* Technical Grid Lines */}
        <line x1="20" y1="180" x2="520" y2="180" strokeDasharray="8 6" opacity="0.35" />
        <line x1="270" y1="20" x2="270" y2="340" strokeDasharray="8 6" opacity="0.35" />

        {/* Cylinder Head & Valve Train */}
        <rect x="60" y="30" width="420" height="110" rx="8" />
        <line x1="60" y1="65" x2="480" y2="65" strokeDasharray="4 3" />

        {/* Valve Chambers */}
        <g transform="translate(80, 42)">
          <circle cx="45" cy="42" r="32" />
          <circle cx="140" cy="42" r="32" />
          <circle cx="235" cy="42" r="32" />
          <circle cx="330" cy="42" r="32" />
        </g>

        {/* Exploded Piston Assembly */}
        <g transform="translate(200, 160)">
          <rect x="35" y="10" width="90" height="60" rx="4" />
          <line x1="30" y1="18" x2="130" y2="18" />
          <line x1="30" y1="26" x2="130" y2="26" />
          <circle cx="80" cy="50" r="11" />
          <path d="M 71 61 L 64 145 A 24 24 0 0 0 96 145 L 89 61 Z" />
          <circle cx="80" cy="155" r="15" />
        </g>
      </g>
    </svg>
  );
}
