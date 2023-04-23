import React from "react";

export default function FlagIcon({
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
      width={`${width ?? "24px"}`}
      height={`${height ?? "24px"}`}
      style={style}
      fill={fill || "none"}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 27V6"
        stroke="#49536E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21.0001C13 15.0001 19 27.0001 27 21.0001V6.00012C19 12.0001 13 0.000117183 5 6.00012"
        stroke="#49536E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
