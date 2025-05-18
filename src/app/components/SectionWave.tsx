import React from "react";

interface SectionWaveProps {
  color?: string;
  flip?: boolean;
}

// Koru-inspired SVG wave, can be flipped for bottom/top
export default function SectionWave({ color = "#e6d6c3", flip = false }: SectionWaveProps) {
  return (
    <div aria-hidden className={flip ? "rotate-180 w-full" : "w-full"} style={{lineHeight:0}}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[60px] md:h-[90px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 70 Q 180 0 360 70 T 720 70 T 1080 70 T 1440 70 V90 H0Z"
          fill={color}
        />
        {/* Koru spiral accents */}
        <path d="M300 65 Q310 60 308 50 Q305 40 295 45 Q285 50 288 60 Q292 70 300 65" stroke="#37513a" strokeWidth="3" fill="none"/>
        <path d="M1140 65 Q1150 60 1148 50 Q1145 40 1135 45 Q1125 50 1128 60 Q1132 70 1140 65" stroke="#8b3a2e" strokeWidth="3" fill="none"/>
      </svg>
    </div>
  );
}
