"use client";

import { Button, Tooltip } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const covers = ["/images/cover-0.png", "/images/cover-1.png"];

export default function Banner() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((prev) => (prev + 1) % covers.length);
  };

  return (
    <>
      <div className="absolute inset-0 -top-20 -z-10  h-screen bg-gradient-to-b from-support"></div>
      <section className="relative z-0 mx-auto flex min-h-screen flex-col">
        <Tooltip
          followCursor
          placement="right"
          title="Click to change cover"
          enterDelay={500}
          onClick={handleClick}
        >
          <div className="absolute left-0 right-0 top-0 mx-auto h-96 max-w-[1536px] overflow-hidden">
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
        <div className="container mt-12 flex flex-col items-end">
          <h1 className="z-10 mb-4 text-end text-4xl font-semibold tracking-tight text-primary-dark">
            Your Vaccine Partner
          </h1>
          <h2 className="z-10 mb-10 text-end text-2xl tracking-tight">
            Health protection made easy
          </h2>
          <Button
            variant="contained"
            onClick={() => void router.push("/hospital")}
          >
            Get started
          </Button>
        </div>
        <div className="absolute top-60 -z-10 mx-auto hidden aspect-[1.2] h-60 sm:h-72 md:left-[12rem] md:right-0 md:block md:h-[24rem] lg:left-[14rem] lg:h-[28rem] xl:left-[16rem] xl:h-[32rem]">
          <Image
            className="object-contain"
            src="/images/anime.png"
            alt="Cover"
            priority
            fill
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
}
