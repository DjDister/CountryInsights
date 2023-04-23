import React from "react";
import styles from "./CountryCard.module.css";

interface EmptyCountryCardProps {
  color: string;
  name: string;
}

export default function EmptyCountryCard({
  color,
  ...props
}: EmptyCountryCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.label}>{props.name}</div>
      <div className={styles.detailsContainer}>
        <div className={styles.padding}>
          <div className={styles.infoContainerEmpty}>No information found!</div>
        </div>
        <div style={{ backgroundColor: color, width: "100%", height: 10 }} />
      </div>
    </div>
  );
}
