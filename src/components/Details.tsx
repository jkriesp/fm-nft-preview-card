import React from "react";
import styles from "./Details.module.css";
import iconEthereum from "../assets/icon-ethereum.svg";
import iconClock from "../assets/icon-clock.svg";

interface DetailsProps {
  price: number;
  timeLeft: number;
}

const Details: React.FC<DetailsProps> = ({ price, timeLeft }) => {
  return (
    <div className={styles.details}>
      <div className={styles.price}>
        <img src={iconEthereum} alt="Ethereum Icon" className={styles.icon} />
        <span>{price} ETH</span>
      </div>
      <div className={styles.timeLeft}>
        <img src={iconClock} alt="Clock Icon" className={styles.icon} />
        <span>{timeLeft} days left</span>
      </div>
    </div>
  );
};

export default Details;
