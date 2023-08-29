import Banner from "@/components/Banner";
import Grid from "@/components/Grid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Grid />
    </main>
  );
}
