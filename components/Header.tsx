"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F5]">
        <div className="h-[70px] px-[10px] min-[1911px]:px-[65px] flex items-center">
          {/* Logo */}
          <div className="flex items-center gap-[20px]">
            <Link href="/" className="block" aria-label="DANS home">
              <Image
                src="/images/logo/DANS_logo_800x800px copy.png"
                alt="DANS"
                width={2248}
                height={391}
                style={{ width: 130, height: "auto" }}
                priority
              />
            </Link>
            <Image
              src="/images/logo/SALONE_logo_800x800px copy.png"
              alt="Milano Salone"
              width={3037}
              height={404}
              style={{ width: 170, height: "auto", filter: "invert(1) brightness(0.455) invert(1)" }}
              priority
            />
          </div>

          {/* Desktop nav (xl+) and Tablet nav (800px–1279px) */}
          <nav className="hidden min-[800px]:flex ml-auto xl:pr-[210px]">
            <ul className="flex" style={{ gap: "clamp(30px, 6.5vw, 95px)" }}>
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[20px] font-bold hover:opacity-50 transition-opacity whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile: - 799px */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="ml-auto min-[800px]:hidden w-10 h-10 flex flex-col justify-center items-end gap-[6px] hover:opacity-50 transition-opacity"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="w-8 h-[2px] bg-black" />
            <span className="w-8 h-[2px] bg-black" />
            <span className="w-8 h-[2px] bg-black" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 bg-[#F5F5F5] z-50 min-[800px]:hidden flex flex-col px-[10px] pt-[20px]">
          {/* Top row: logo + close button */}
          <div className="flex items-center justify-between h-[70px]">
            <div className="flex items-center gap-[10px]">
              <Link href="/" onClick={() => setOpen(false)} aria-label="DANS home">
                <Image
                  src="/images/logo/DANS_logo_800x800px copy.png"
                  alt="DANS"
                  width={2248}
                  height={391}
                  style={{ width: 130, height: "auto" }}
                />
              </Link>
              <Image
                src="/images/logo/SALONE_logo_800x800px copy.png"
                alt="Milano Salone"
                width={3037}
                height={404}
                style={{ width: 130, height: "auto", filter: "invert(1) brightness(0.455) invert(1)" }}
              />
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-[28px] font-light leading-none"
            >
              ×
            </button>
          </div>

          {/* Menu items */}
          <nav className="mt-[20px] flex flex-col gap-[20px]">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="body-en text-[25px] hover:opacity-50 transition-opacity"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
