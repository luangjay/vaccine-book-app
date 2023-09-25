"use client";

import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  playing: boolean;
};

export default function VideoPlayer({ playing }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playing) {
      void ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [playing]);

  return (
    <video
      src="/videos/getvaccine.mp4"
      controls
      autoPlay
      loop
      muted
      ref={ref}
    />
  );
}
