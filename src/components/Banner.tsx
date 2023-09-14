"use client";

import { Tooltip } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const covers = [
  "/images/cover-0.png",
  "/images/cover-1.png",
  "/images/cover-2.png",
];

export default function Banner() {
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((prev) => (prev + 1) % covers.length);
  };

  return (
    <div className="absolute inset-0 z-0 mx-auto flex min-h-screen w-auto flex-col items-end bg-gradient-to-b from-support px-8 xl:px-16">
      <Tooltip
        followCursor
        placement="right"
        title="Click to change cover"
        enterDelay={500}
        onClick={handleClick}
      >
        <div className="absolute left-0 right-0 top-0 mx-auto h-96 max-w-[1536px]">
          <Image
            className="object-cover"
            src={covers[idx]!}
            alt="Cover"
            priority
            fill
            sizes="100vw"
          />
        </div>
      </Tooltip>
      <div className="relative top-40 inline-flex flex-col gap-4 text-right">
        <h1 className="text-4xl font-semibold tracking-tight text-primary-dark">
          Your Vaccine Partner
        </h1>
        <h2 className="text-2xl tracking-tight">Health protection made easy</h2>
      </div>
    </div>
  );
}
