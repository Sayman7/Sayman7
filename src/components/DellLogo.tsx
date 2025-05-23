"use client";
import React from "react";

interface DellLogoProps {
  size?: number; // in pixels
  color?: string;
  className?: string;
}

const DellLogo: React.FC<DellLogoProps> = ({ size = 64, color = "#007DB8", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="200" cy="200" r="190" stroke={color} strokeWidth="20" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="120"
        fill={color}
        transform="rotate(-45, 200, 200)"
      >
        DELL
      </text>
    </svg>
  );
};

export default DellLogo;
