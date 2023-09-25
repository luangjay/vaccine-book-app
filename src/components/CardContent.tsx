import { type Hospital } from "@/api/hospitals";
import Image from "next/image";
import Link from "next/link";

type CardContentProps = {
  hospital: Hospital;
};

export default function CardContent({ hospital }: CardContentProps) {
  return (
    <div className="flex flex-col font-mono">
      <Link
        className="relative flex aspect-[3/2] items-center justify-center overflow-hidden"
        href={`/hospital/${hospital.id}`}
      >
        <Image
          className="transition-width transition-height object-cover duration-500 hover:scale-110"
          src={hospital.image ?? ""}
          alt="Note"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 px-4 pt-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate border border-transparent text-xl font-bold tracking-tight text-primary-dark">
            {hospital.name || "No Title"}
          </h3>
        </div>
        <div className="h-24">
          <p className="h-[calc(100%+2px)] overflow-y-auto border border-transparent">
            {hospital.description || "No description"}
          </p>
        </div>
      </div>
    </div>
  );
}
