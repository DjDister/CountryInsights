import React from "react";

export default function DownArrowIcon({
  width,
  height,
  fill,
  style,
}: {
  width?: string;
  height?: string;
  fill?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      fill={fill || "none"}
      width={`${width ?? "24px"}`}
      height={`${height ?? "24px"}`}
      style={style}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 12L16 22L6 12"
        stroke="#49536E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
