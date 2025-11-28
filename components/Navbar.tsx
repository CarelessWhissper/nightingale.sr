"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:opacity-70 transition"
        >
         nG
        </Link>

        {/* Right Items */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} label={item.label} />
          ))}

          {/* Commission Button */}
          <Link
            href="/commission"
            className="px-5 py-2 rounded-full bg-black text-white hover:bg-neutral-900 transition text-sm font-medium"
          >
            Commission
          </Link>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative group text-lg font-medium"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="inline-flex">
        {label.split("").map((char, index) => (
          <span
            key={index}
            className="relative inline-block"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            {/* Normal character */}
            <span
              className={`inline-block transition-all duration-500 ${
                isHovered ? "opacity-0 -translate-y-2" : "opacity-100"
              }`}
            >
              {char}
            </span>

            {/* Digital flicker character */}
            <span
              className={`absolute inset-0 inline-block text-pink-500 transition-all duration-500 ${
                isHovered
                  ? "opacity-100 translate-y-0 digital-flicker"
                  : "opacity-0 translate-y-2"
              }`}
            >
              {char}
            </span>
          </span>
        ))}
      </span>
    </Link>
  );
}