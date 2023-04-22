import React from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  inputIcon?: JSX.Element;
  hintText?: string;
  unfoldIcon?: JSX.Element;
  className?: string;
  customInputStyle?: React.CSSProperties;
}

export default function Dropdown({
  label,
  inputIcon,
  hintText,
  unfoldIcon,
  className,
  customInputStyle,
  ...props
}: DropdownProps) {
  return (
    <div className={styles.container}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.inputCont} style={customInputStyle}>
        {inputIcon && <div className={styles.inputIcon}>{inputIcon}</div>}
        <input className={styles.input} />
        {inputIcon && <div className={styles.inputIcon}>{unfoldIcon}</div>}
      </div>
      {hintText && <div className={styles.hintText}>{hintText}</div>}
    </div>
  );
}
