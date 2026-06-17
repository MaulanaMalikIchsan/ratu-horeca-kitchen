"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappLink } from "../lib/constants";

export default function Navbar() {
    const pathname = usePathname();
    const menus = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Product", href: "/products" },
  { name: "Workshop", href: "/workshop" },
  { name: "Contact", href: "/contact" },
];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-500/20 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo/rhk-logo.jpeg"
            alt="Ratu Horeca Kitchen"
            width={55}
            height={55}
            priority
          />

          <div>
            <h1 className="text-white font-bold text-lg">
              RATU HORECA KITCHEN
            </h1>

            <p className="text-yellow-500 text-xs">
              Design • Build • Supply
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4">
  {menus.map((menu) => (
    <Link
      key={menu.href}
      href={menu.href}
      className={`px-4 py-2 rounded-lg transition ${
        pathname === menu.href
          ? "bg-yellow-500 text-black font-semibold"
          : "text-white hover:text-yellow-500"
      }`}
    >
      {menu.name}
    </Link>
  ))}
</div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
          Konsultasi Gratis
        </a>

      </div>
    </header>
  );
}