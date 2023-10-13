"use client";

import { useWindowListener } from "@/hooks/useWindowListener";
import { Button } from "@mui/material";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-background shadow-lg md:flex-row">
      <VideoPlayer playing={playing} />
      <div className="flex flex-col items-start gap-4 p-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Get your vaccine today
        </h2>
        <p>
          Getting vaccinated today is crucial for protecting yourself and others
          from severe illnesses and reducing the spread of COVID-19. It helps
          build herd immunity, enables a return to normalcy, and reduces the
          risk of new variants emerging.
        </p>
        <Button
          variant="contained"
          onClick={() => void setPlaying((prev) => !prev)}
        >
          {playing ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
}
