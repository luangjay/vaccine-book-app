import { getNotes } from "@/api/notes";
import Card from "./Card";

export default async function Grid() {
  const notes = await getNotes();

  return (
    <ul className="grid auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
      {notes.map((note) => (
        <li key={note._id}>
          <Card note={note} />
        </li>
      ))}
    </ul>
  );
}
