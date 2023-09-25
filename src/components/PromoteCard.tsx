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
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-background shadow-lg md:flex-row">
      <VideoPlayer playing={playing} />
      <div className="flex flex-col items-start gap-4 p-8">
        <p className="text-2xl font-semibold tracking-tight">
          Get your vaccine today
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
