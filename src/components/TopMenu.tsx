import Logo from "./Logo";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-20 flex-row-reverse items-center gap-6 bg-background/60 px-8 shadow-sm backdrop-blur">
      <TopMenuItem href="/">
        <Logo />
      </TopMenuItem>
      <TopMenuItem href="/booking">Booking</TopMenuItem>
    </header>
  );
}
