"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    submenu: [
      { label: "Acupuncture", href: "/acupuncture" },
      { label: "Ayurveda", href: "/ayurveda" },
      { label: "Herbal Medicine", href: "/herbal-medicine" },
    ],
  },
  {
    label: "Contact",
    submenu: [
      { label: "Contact", href: "/contact" },
      { label: "Community Partners", href: "/community-partners" },
    ],
  },
];

const scheduleUrl = "https://acusimple.com/access/10025/#/appointments/";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(null);
  const pathname = usePathname();
  const normalizedPath =
    pathname === "/" ? "/" : (pathname || "/").replace(/\/+$/, "");

  const isActive = (href) => {
    const normalizedHref = href === "/" ? "/" : href.replace(/\/+$/, "");
    return normalizedHref === normalizedPath;
  };

  const isGroupActive = (submenu = []) => submenu.some((item) => isActive(item.href));

  useEffect(() => {
    setMobileOpen(false);
    setMobileGroupOpen(null);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileGroupOpen(null);
  };

  const toggleMobileGroup = (label) => {
    setMobileGroupOpen((prev) => (prev === label ? null : label));
  };

  return (
    <header className="site-header">
      <div className="nav-bar">
        <Link className="logo" href="/" aria-label="3 Pillars Holistic Health">
          <Image
            src="/assets/images/3-Pillars-Logo-V-2.png"
            alt="3 Pillars Holistic Health"
            width={567}
            height={233}
            sizes="96px"
            priority
          />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => {
            if (item.submenu?.length) {
              const groupActive = isGroupActive(item.submenu);
              return (
                <div className="nav-group" key={item.label}>
                  <button
                    className={`nav-link nav-trigger${groupActive ? " is-active" : ""}`}
                    type="button"
                    aria-haspopup="true"
                  >
                    {item.label} <span className="nav-chevron">▾</span>
                  </button>
                  <div className="dropdown">
                    {item.submenu.map((subItem) => (
                      <Link
                        href={subItem.href}
                        key={subItem.label}
                        aria-current={isActive(subItem.href) ? "page" : undefined}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
                href={item.href}
                key={item.label}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-cta"
            href={scheduleUrl}
            target="_blank"
            rel="noreferrer"
          >
            Schedule Now
          </a>
          <button
            className="nav-toggle"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <span className={`nav-toggle-icon ${mobileOpen ? "is-open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? "is-open" : ""}`}
      >
        <nav className="mobile-nav-links" aria-label="Mobile">
          {navItems.map((item) => {
            if (item.submenu?.length) {
              const isOpen = mobileGroupOpen === item.label;
              return (
                <div className="mobile-nav-group" key={item.label}>
                  <button
                    className={`mobile-nav-trigger ${isOpen ? "is-open" : ""}`}
                    type="button"
                    onClick={() => toggleMobileGroup(item.label)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <span className="mobile-chevron">▾</span>
                  </button>
                  <div className={`mobile-submenu ${isOpen ? "is-open" : ""}`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        href={subItem.href}
                        key={subItem.label}
                        className={`mobile-submenu-link${
                          isActive(subItem.href) ? " is-active" : ""
                        }`}
                        onClick={closeMobileMenu}
                        aria-current={isActive(subItem.href) ? "page" : undefined}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                className={`mobile-nav-link${isActive(item.href) ? " is-active" : ""}`}
                href={item.href}
                key={item.label}
                onClick={closeMobileMenu}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            className="nav-cta mobile-nav-cta"
            href={scheduleUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
          >
            Schedule Now
          </a>
        </nav>
      </div>
    </header>
  );
}
