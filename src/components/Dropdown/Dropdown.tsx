import React, { useRef, useState } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  inputIcon?: JSX.Element;
  hintText?: string;
  unfoldIcon?: JSX.Element;
  className?: string;
  customInputStyle?: React.CSSProperties;
  options: { key: string; value: string }[];
  selectedVal: { key: string; value: string };
  handleChange: (val: { key: string; value: string }) => void;
}

export default function Dropdown({
  label,
  inputIcon,
  hintText,
  unfoldIcon,
  className,
  customInputStyle,
  options,
  selectedVal,
  handleChange,
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const getDisplayValue = () => {
    if (filterText) return filterText;
    if (!filterText && isOpen) return "";
    if (selectedVal && !filterText) return selectedVal.value;

    return "";
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (isOpen && e.target === inputRef.current) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as Element;
    if (target.tagName === "INPUT") {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setIsOpen(!isOpen);
      setFilterText("");
      getDisplayValue();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={styles.closingContainer}
          onClick={() => {
            setIsOpen(false);
            setFilterText("");
            getDisplayValue();
          }}
        />
      )}
      <div className={`${styles.container} ${className}`}>
        {label && <div className={styles.label}>{label}</div>}
        <div
          onClick={handleContainerClick}
          className={styles.inputCont}
          style={customInputStyle}
        >
          {inputIcon && <div className={styles.inputIcon}>{inputIcon}</div>}
          <input
            ref={inputRef}
            onClick={handleInputClick}
            onChange={(e) => setFilterText(e.target.value)}
            value={getDisplayValue()}
            className={styles.input}
          />
          {inputIcon && <div className={styles.inputIcon}>{unfoldIcon}</div>}
          {isOpen && (
            <div className={styles.unfoldedMenu}>
              {options
                .filter(
                  (option) =>
                    option.value
                      .toLowerCase()
                      .indexOf(filterText.toLowerCase()) > -1
                )
                .map((option) => (
                  <div
                    key={option.key}
                    onClick={() => {
                      setFilterText("");
                      handleChange(option);
                      setIsOpen(false);
                    }}
                    className={styles.option}
                  >
                    {option.value}
                  </div>
                ))}
            </div>
          )}
        </div>
        {hintText && <div className={styles.hintText}>{hintText}</div>}
      </div>
    </>
  );
}
