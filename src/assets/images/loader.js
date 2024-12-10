import React from "react";

const LoaderSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="117"
      height="117"
      style={{
        shapeRendering: "auto",
        display: "block",
        background: "transparent"
      }}
    >
      <g>
        {[...Array(35).keys()].map((i) => {
          const rotation = i * (360 / 35); // Calculate rotation per segment
          const delay = -(i * 1.1235955056179776) / 35; // Calculate delay based on index
          return (
            <g transform={`rotate(${rotation} 50 50)`} key={i}>
              <rect
                fill="#00a5ff"
                height="13"
                width="10"
                ry="6.5"
                rx="5"
                y="-6.5"
                x="45"
              >
                <animate
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                  dur="1.1235955056179776s"
                  keyTimes="0;1"
                  values="1;0"
                  attributeName="opacity"
                />
              </rect>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default LoaderSVG;
