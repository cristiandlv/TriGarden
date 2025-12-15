"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Simpler scroll effect: only toggle shadow when scrolled past threshold.
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
      className={`sticky top-0 z-50 site-header transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-3 md:px-6">
        <div className="w-full flex items-center justify-between py-3">
          {/* Logo on the left for desktop; centered visually on small screens */}
          <a href="#" className="flex items-center gap-3" aria-label="Inicio">
            <div className="relative flex items-center h-32 md:h-40 transform -translate-y-1 md:-translate-y-2">
              <Image src="/TriGarde.svg" alt="TriGarden" width={640} height={180} className="object-contain max-w-full h-32 md:h-40" />
            </div>
          </a>

          {/* Desktop menu on the right */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#packs" className="nav-link text-base font-medium text-gray-700 dark:text-gray-200">Packs</a>
            <a href="#tecnologias" className="nav-link text-base font-medium text-gray-700 dark:text-gray-200">Tecnologías</a>
            <a href="#nosotros" className="nav-link text-base font-medium text-gray-700 dark:text-gray-200">Nosotros</a>
            <a href="#contacto" className="nav-link text-base font-medium text-gray-700 dark:text-gray-200">Contacto</a>
            <a href="#contacto" className="ml-4 px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-black rounded-md font-semibold shadow-sm hover:scale-[1.01] transition text-sm">Cotizar</a>
          </div>

          {/* Mobile hamburger on the right */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-green-200/60"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Mobile panel: full-width, accessible, slides below header */}
      <div className={`md:hidden transition-all duration-200 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`} aria-hidden={!open}>
        <div className="px-4 pb-4">
          <div className="section-card p-4 flex flex-col gap-3 items-center">
            {/* Show logo again in mobile panel for clarity, larger */}
            <div className="mb-2">
              <Image src="/TriGarde.svg" alt="TriGarden" width={480} height={140} className="object-contain h-24" />
            </div>
            <a href="#packs" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200 text-base">Packs</a>
            <a href="#tecnologias" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200 text-base">Tecnologías</a>
            <a href="#nosotros" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200 text-base">Quiénes somos</a>
            <a href="#contacto" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200 text-base">Contacto</a>
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-black rounded-lg font-semibold inline-block text-center">Cotizar</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
