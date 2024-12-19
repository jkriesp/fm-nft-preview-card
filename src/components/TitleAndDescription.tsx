import React from "react";
import styles from "./TitleAndDescription.module.css";

// Define the shape of props using an interface
interface TitleAndDescriptionProps {
  title: string;
  description: string;
}

// Add the type annotation to the props parameter
const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.titleAndDescription}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TitleAndDescription;
