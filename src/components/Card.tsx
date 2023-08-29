import { type Note } from "@/api/notes";
import { format } from "date-fns";
import Image from "next/image";

type CardProps = {
  note: Note;
};

export default function Card({ note }: CardProps) {
  return (
    <div className="flex flex-col rounded-xl bg-background pt-8 font-mono shadow-md">
      <div className="relative flex aspect-[3/2] items-center justify-center">
        <Image
          className="object-cover"
          src={note.image ?? ""}
          alt="Note"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-heading truncate border border-transparent text-xl font-bold tracking-tight">
            {note.title || "No Title"}
          </h3>
        </div>
        <div className="h-24">
          <p className="h-[calc(100%+2px)] overflow-y-auto border border-transparent">
            {note.description || "No description"}
          </p>
        </div>
        <div className="flex items-center justify-end text-right text-foreground/60">
          <p className="truncate border border-transparent text-sm">
            {note.author || "Anonymous"}&nbsp;-&nbsp;
            {format(note._creationTime, "M/d/yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
}
