"use client";

import { useState, useEffect } from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-md bg-white/80 dark:bg-black/20 backdrop-blur" : ""
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-3 md:px-6">
        <div className="flex items-center justify-between py-3">
          {/* LOGO */}
          <a href="#" className="flex items-center justify-center w-full md:w-auto" aria-label="Inicio">
            <div className="relative flex items-center justify-center h-auto md:h-auto transform -translate-y-1 md:-translate-y-2">
              <img
                src="/TriGarde_logo.svg"
                alt="TriGarde Studio"
                className="nav-logo mx-auto ml-[40px] md:ml-0"
                decoding="async"
                loading="eager"
                style={{ marginTop: '13px', display: 'block' }}
              />
            </div>
          </a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {/* LINKS */}
            <div className="flex items-center gap-6">
              <a href="#packs" className="nav-link">Packs</a>
              <a href="#tecnologias" className="nav-link">Tecnologías</a>
              <a href="#nosotros" className="nav-link">Nosotros</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </div>

            {/* DIVIDER */}
            <div className="h-6 w-px bg-gray-300/40 dark:bg-white/20" />

            {/* SOCIAL */}
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300">
              <a
                href="www.instagram.com/trigarde.studio"
                aria-label="Instagram"
                className="hover:text-emerald-500 transition"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="www.facebook.com/trigarde.studio"
                aria-label="Facebook"
                className="hover:text-blue-500 transition"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="www.linkedin.com/company/trigarde"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-black rounded-md font-semibold shadow-sm hover:scale-[1.03] transition text-sm"
            >
              Cotizar
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  {open ? (
                    <>
                      <path d="M6 6l12 12" />
                      <path d="M6 18L18 6" />
                    </>
                  ) : (
                    <>
                      <path d="M4 6h16" />
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                    </>
                  )}
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <div
        className={`md:hidden transition-all duration-200 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pb-6">
          <div className="rounded-xl border border-gray-200/10 bg-white/5 p-5 flex flex-col items-center gap-4">
            <a href="#packs" onClick={() => setOpen(false)}>Packs</a>
            <a href="#tecnologias" onClick={() => setOpen(false)}>Tecnologías</a>
            <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
            <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-black rounded-md font-semibold w-full text-center"
            >
              Cotizar
            </a>

            {/* SOCIAL MOBILE */}
            <div className="flex gap-6 pt-2 text-gray-400">
              <FiInstagram className="w-5 h-5" />
              <FiFacebook className="w-5 h-5" />
              <FiLinkedin className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
