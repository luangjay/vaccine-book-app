import Link from "next/link";

type TopMenuItemProps = {
  href: string;
  children?: React.ReactNode;
};

export default function TopMenuItem({ href, children }: TopMenuItemProps) {
  return (
    <Link className="leading-none hover:text-foreground/80" href={href}>
      {children}
    </Link>
  );
}
