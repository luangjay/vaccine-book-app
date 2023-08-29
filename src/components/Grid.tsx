import Card from "./Card";
import { getNotes } from "@/api/notes";
import styles from "./Grid.module.css";

export default async function Grid() {
  const notes = await getNotes();

  return (
    <div className={`container ${styles.container}`}>
      <ul className={styles.grid}>
        {notes.map((note) => (
          <li key={note._id}>
            <Card note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
