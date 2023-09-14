"use client";

import { type Hospital } from "@/api/hospitals";
import { cn } from "@/lib/utils";
import { OpenInFull } from "@mui/icons-material";
import { Dialog, DialogContent } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import CardContent from "./CardContent";

type CardProps = {
  hospital: Hospital;
};

export default function Card({ hospital }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleHover = (e: React.SyntheticEvent) => {
    setIsHovered(e.type === "mouseover");
  };

  const handleCardMouseAction = (e: React.SyntheticEvent) => {
    if (e.type === "mouseover") {
      e.currentTarget.classList.remove("shadow-lg");
      e.currentTarget.classList.remove("bg-white");
      e.currentTarget.classList.add("shadow-2xl");
      e.currentTarget.classList.add("bg-neutral-200");
    } else {
      e.currentTarget.classList.remove("shadow-2xl");
      e.currentTarget.classList.remove("bg-neutral-200");
      e.currentTarget.classList.add("shadow-lg");
      e.currentTarget.classList.add("bg-white");
    }
  };

  const handleDialogOpen = () => void setIsDialogOpen(true);
  const handleDialogClose = () => void setIsDialogOpen(false);

  return (
    <div
      className="relative flex flex-col"
      onMouseOver={handleHover}
      onMouseOut={handleHover}
    >
      <button
        className={cn(
          "absolute right-4 top-4 z-10 rounded-full border bg-white p-2 hover:bg-background/90",
          !isHovered && "hidden"
        )}
        onClick={handleDialogOpen}
      >
        <OpenInFull />
      </button>
      <CardContent
        className="bg-white shadow-lg hover:bg-neutral-200 hover:shadow-2xl"
        hospital={hospital}
        onMouseOver={handleCardMouseAction}
        onMouseOut={handleCardMouseAction}
      />
      <Dialog
        fullWidth
        keepMounted
        open={isDialogOpen}
        onClose={handleDialogClose}
      >
        <DialogContent sx={{ padding: 0 }}>
          <div className="rounded-inherit relative aspect-[3/2] w-full">
            <Image
              className="object-cover"
              quality={100}
              src={hospital.image ?? ""}
              alt={hospital.title ?? ""}
              fill
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
