"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { navigation } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/projects") return pathname.startsWith("/projects");
    return pathname === href;
  };

  return (
    <header className="site-header">
      <nav className="page-shell nav-inner" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Junjie Liu, home">
          Junjie Liu<span aria-hidden="true"></span>
        </Link>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <Link
              className={isActive(item.href) ? "active" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div className={`mobile-nav ${isOpen ? "mobile-nav-open" : ""}`} id="mobile-navigation">
        <div className="page-shell mobile-nav-inner">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
