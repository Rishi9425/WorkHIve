import React from "react";

const WorkHiveLogo = ({ fillColor = "#404145", size = "100%" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 120"
      width={size}
      height="auto"
      role="img"
      aria-label="WorkHive Logo"
    >
      <text
        x="10"
        y="80" 
        fontFamily="'Arial', sans-serif"
        fontSize="50"  // Reduced font size
        fontWeight="bold"
        fill={fillColor}
      >
        Work
        <tspan fill="purple">Hive</tspan>
      </text>
    </svg>
  );
};

export default WorkHiveLogo;
