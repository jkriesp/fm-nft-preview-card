import CreatorInfo from "./CreatorInfo";
import Details from "./Details";
import TitleAndDescription from "./TitleAndDescription";
import styles from "./NFTCard.module.css";
import iconViewOverlay from "../assets/icon-view.svg";

const NFTcard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="image-equilibrium.jpg" alt="NFT Preview"></img>
        <div className={styles.overlay}>
          <img src={iconViewOverlay} alt="View Icon" />
        </div>
      </div>
      <div className={styles.content}>
        <TitleAndDescription
          title="Equilibrium #3429"
          description="Our Equilibrium collection promotes balance and calm."
        />
        <Details price={0.041} timeLeft={3} />
        <div className={styles.divider}></div>
        <CreatorInfo
          name="Jules Wyvern"
          profilePic="/image-avatar.png"
          profileLink="link"
        />
      </div>
    </div>
  );
};

export default NFTcard;
