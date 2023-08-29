import Image from "next/image";
import { type Note } from "@/api/notes";
import { format } from "date-fns";
import styles from "./Card.module.css";

type CardProps = {
  note: Note;
};

export default function Card({ note }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={note.image ?? ""}
          alt="Note"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{note.title || "No Title"}</h3>
        </div>
        <div className={styles.text}>
          <p className={styles.description}>
            {note.description || "No description"}
          </p>
        </div>
        <div className={styles.footer}>
          <p className={styles.author}>
            {note.author || "Anonymous"}&nbsp;-&nbsp;
            {format(note._creationTime, "M/d/yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
}
