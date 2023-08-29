import Link from "next/link";

type MenuItemProps = {
  href: string;
  children?: React.ReactNode;
};

export default function TopMenuItem({ href, children }: MenuItemProps) {
  return (
    <Link
      className="overflow-hidden text-lg hover:text-foreground/80"
      href={href}
    >
      {children}
    </Link>
  );
}
