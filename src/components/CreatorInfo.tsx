import styles from "./CreatorInfo.module.css";

interface CreatorInfoProps {
  name: string;
  profilePic: string;
  profileLink: string;
}
const CreatorInfo: React.FC<CreatorInfoProps> = ({
  name,
  profilePic,
  profileLink,
}) => {
  return (
    <div className={styles.creatorInfo}>
      <img
        className={styles.profilePic}
        src={profilePic}
        alt={"Profile picture of " + name}
      />
      <span className={styles.name}>
        Creation of{" "}
        <a href={profileLink} className={styles.name}>
          {name}
        </a>
      </span>
    </div>
  );
};

export default CreatorInfo;
