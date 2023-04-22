import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  underInputText?: string;
  className?: string;
  customInputStyle?: React.CSSProperties;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function Input({
  label,
  className,
  customInputStyle,
  value,
  underInputText,
  handleChange,
  ...props
}: InputProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.inputCont} style={customInputStyle}>
        <div className={styles.spacer}></div>
        <input
          className={styles.input}
          style={customInputStyle}
          type="text"
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>

      <div className={styles.invalidLabel}>{underInputText}</div>
    </div>
  );
}
