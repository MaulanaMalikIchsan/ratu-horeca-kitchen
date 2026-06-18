"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ConsultationButton from "./consultation-button";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/rhk-logo.jpeg"
            alt="Ratu Horeca Kitchen"
            width={55}
            height={55}
            priority
          />

          <div>
            <h1 className="text-sm font-bold text-white sm:text-base lg:text-lg">
              RATU HORECA KITCHEN
            </h1>

            <p className="text-xs text-yellow-500">
              Design • Build • Supply
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={`rounded-lg px-4 py-2 transition ${
                pathname === menu.href
                  ? "bg-yellow-500 font-semibold text-black"
                  : "text-white hover:text-yellow-500"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <ConsultationButton
            className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-lg border border-yellow-500/20 p-2 text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-yellow-500/20 bg-black lg:hidden">
          <div className="flex flex-col p-4">
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 transition ${
                  pathname === menu.href
                    ? "bg-yellow-500 font-semibold text-black"
                    : "text-white hover:bg-zinc-900"
                }`}
              >
                {menu.name}
              </Link>
            ))}

            <div className="mt-4">
              <ConsultationButton
                className="w-full rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}