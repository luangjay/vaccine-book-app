import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.image}>
        <Image
          src="/images/cover.png"
          alt="Cover"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>VacciZe</h1>
        <h2 className={styles.description}>Health protection made easy</h2>
      </div>
    </div>
  );
}
