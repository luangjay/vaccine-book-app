import { type Hospital } from "@/api/hospitals";
import Image from "next/image";

type CardContentProps = {
  hospital: Hospital;
};

export default function CardContent({ hospital }: CardContentProps) {
  return (
    <div className="flex flex-col font-mono">
      <div className="relative flex aspect-[3/2] items-center justify-center">
        <Image
          className="object-cover"
          src={hospital.image ?? ""}
          alt="Note"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 pt-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate border border-transparent text-xl font-bold tracking-tight text-primary-dark">
            {hospital.title || "No Title"}
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
