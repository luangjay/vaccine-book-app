import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@mui/material";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logo from "./Logo";
import TopMenuItem from "./TopMenuItem";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-background/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 md:h-20 md:flex-row md:gap-6">
        <div className="flex items-center gap-4">
          {session ? (
            <Link tabIndex={-1} href="/api/auth/signout">
              <Button>Sign out</Button>
            </Link>
          ) : (
            <Link tabIndex={-1} href="/api/auth/signin">
              <Button>Sign in</Button>
            </Link>
          )}
          <TopMenuItem href="/mybooking">My booking</TopMenuItem>
        </div>
        <div className="flex items-center gap-4">
          <TopMenuItem href="/booking">Booking</TopMenuItem>
          <TopMenuItem href="/hospital">Hospitals</TopMenuItem>
          <TopMenuItem href="/">
            <Logo />
          </TopMenuItem>
        </div>
      </div>
    </header>
  );
}
