"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Accueil"], ["/services", "Services"], ["/realisations", "Réalisations"],
  ["/blog", "Journal"], ["/contact", "Contact"],
];

export default function Navigation() {
  const pathname = usePathname();
  return <nav aria-label="Navigation principale">{links.map(([href, label]) => (
    <Link key={href} href={href} aria-current={pathname === href || (href !== "/" && pathname.startsWith(href + "/")) ? "page" : undefined}>{label}</Link>
  ))}</nav>;
}
