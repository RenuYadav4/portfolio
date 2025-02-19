import React from "react";

const CircularProgress = ({ value, type, color }) => {
  const radius = 20; // Radius of the circle
  const stroke = 6.5; // Stroke width
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const percentage = type === "sgpa" ? (value / 10) * 100 : value; // Convert SGPA to percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="lightgray"
          strokeWidth={stroke}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke={`${color}`}
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      {/* Text Inside Circle (Different for Percentage & SGPA) */}
      <div className="absolute flex items-center justify-center w-24 h-24 text-xs font-bold">
        {type === "sgpa" ? value.toFixed(2) : `${value.toFixed(1)}`}
      </div>
    </div>
  );
};
export default CircularProgress;