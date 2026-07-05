"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Anasayfa" },
  { href: "/about", label: "Hakkımda" },
  { href: "/projects", label: "Projeler" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <Link href="/" className="font-display text-base font-semibold text-ink">
          Abdülkadir Yılmaz
        </Link>

        <nav className="flex items-center gap-6 text-sm text-ink-dim">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "text-ink" : "transition-colors hover:text-ink"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
