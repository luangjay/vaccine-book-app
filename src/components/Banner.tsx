"use client";

import { cn } from "@/lib/utils";
import { Button, Tooltip } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PromoteCard from "./PromoteCard";

const covers = ["/images/cover-0.png", "/images/cover-1.png"];

export default function Banner() {
  const router = useRouter();
  const { data: session } = useSession();
  const [mode, setMode] = useState(0);

  const handleClick = () => {
    setMode((prev) => (prev + 1) % covers.length);
  };

  return (
    <>
      <div className="absolute inset-0 -top-20 -z-10  h-screen bg-gradient-to-b from-support"></div>
      <section className="relative z-0 mx-auto flex min-h-screen flex-col">
        <Tooltip
          followCursor
          placement="right"
          title="Click to toggle promotion mode"
          enterDelay={500}
          onClick={handleClick}
        >
          <div className="absolute left-0 right-0 top-0 mx-auto h-96 max-w-[1536px] overflow-hidden">
            <Image
              className="object-cover"
              src={mode === 0 ? "/images/cover-0.png" : "/images/cover-1.png"}
              alt="Cover"
              priority
              fill
              sizes="100vw"
            />
          </div>
        </Tooltip>
        <div className="container mt-12 flex flex-col items-end">
          <h1 className="z-10 mb-4 text-end text-4xl font-semibold tracking-tight text-primary-dark">
            {session ? `Hello ${session.user.name}` : "Your Vaccine Partner"}
          </h1>
          <h2 className="z-10 mb-10 text-end text-2xl tracking-tight">
            Health protection made easy
          </h2>
          <Button
            id="toHospital"
            variant="contained"
            onClick={() => void router.push("/hospital")}
          >
            Get started
          </Button>
        </div>
        <div
          className={cn(
            "container absolute top-72 mx-auto pb-16 md:left-0 md:right-0 md:h-[21rem] md:pb-24 lg:h-[25rem] xl:h-[29rem]",
            mode === 0 ? "block" : "hidden"
          )}
        >
          <PromoteCard />
        </div>
        <div
          className={cn(
            "absolute top-60 -z-10 mx-auto aspect-[1.2] h-60 justify-end sm:h-[18rem] md:left-[12rem] md:right-0 md:h-[24rem] lg:left-[14rem] lg:h-[28rem] xl:left-[16rem] xl:h-[32rem]",
            mode === 1 ? "hidden md:flex md:flex-col" : "hidden"
          )}
        >
          <Image
            className="object-contain"
            src="/images/anime.png"
            alt="Cover"
            priority
            fill
            sizes="100vw"
          />
          <hr className="z-10 h-px w-full border-primary-dark" />
        </div>
      </section>
    </>
  );
}
