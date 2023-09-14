import { type Hospital } from "@/api/hospitals";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import * as React from "react";

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  hospital: Hospital;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, hospital, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-col overflow-hidden rounded-xl bg-white font-mono shadow-lg",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="relative flex aspect-[3/2] items-center justify-center">
          <Image
            className="object-cover"
            src={hospital.image ?? ""}
            alt="Note"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 px-4 py-5">
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
          <div className="flex items-center justify-end text-right text-foreground/60">
            <p className="truncate border border-transparent text-sm">
              {hospital.author || "Anonymous"}&nbsp;-&nbsp;
              {format(hospital._creationTime, "M/d/yyyy")}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
CardContent.displayName = "HospitalCardContent";

export default CardContent;
