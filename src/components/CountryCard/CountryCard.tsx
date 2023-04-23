import React from "react";
import styles from "./CountryCard.module.css";
import { CountryInfo } from "../../../types";
import FlagIcon from "../../assets/svg/FlagIcon";
import UsersIcon from "../../assets/svg/UsersIcon";
import GlobeIcon from "../../assets/svg/GlobeIcon";
import ChatIcon from "../../assets/svg/ChatIcon";

interface CountryCardProps extends CountryInfo {
  color: string;
}

export default function CountryCard({ color, ...props }: CountryCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.label}>{props.name}</div>
      <div className={styles.detailsContainer}>
        <div className={styles.padding}>
          <div className={styles.infoContainer}>
            <FlagIcon />
            {props.capital}
          </div>
          <div className={styles.infoContainer}>
            <UsersIcon />
            {props.population}
          </div>
          <div className={styles.infoContainer}>
            <GlobeIcon />
            {props.subregion}
          </div>
          <div className={styles.infoContainer}>
            <ChatIcon />
            {props.languages}
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.flexCenter}>{props.currency.symbol}</div>
            {props.currency.name}
          </div>
        </div>
        <div style={{ backgroundColor: color, width: "100%", height: 10 }} />
      </div>
    </div>
  );
}
