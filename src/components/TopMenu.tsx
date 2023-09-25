import Logo from "./Logo";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-background/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="container flex flex-col items-center gap-4 py-4 md:h-20 md:flex-row-reverse md:gap-6">
        <TopMenuItem href="/">
          <Logo />
        </TopMenuItem>
        <TopMenuItem href="/hospital">Hospitals</TopMenuItem>
        <TopMenuItem href="/booking">Booking</TopMenuItem>
      </div>
    </header>
  );
}
