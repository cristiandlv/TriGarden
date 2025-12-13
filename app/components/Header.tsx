"use client"

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black/30 backdrop-blur-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-40 h-40 md:w-40 md:h-40">
            <Image src="/TriGarde.svg" alt="TriGarden" fill className="object-contain" />
          </div>
          
        </a>

        <nav className="hidden md:flex gap-6 items-center text-gray-300">
          <a href="#packs" className="hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">Packs</a>
          <a href="#tecnologias" className="hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">Tecnologías</a>
          <a href="#nosotros" className="hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">Quiénes somos</a>
          <a href="#contacto" className="hover:text-white transition px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400">Contacto</a>
          <a href="#contacto" className="ml-4 px-4 py-2 bg-green-400 text-black rounded-lg font-semibold shadow-sm hover:scale-[1.02] transition">Cotizar</a>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md border border-white/10"
          >
            <span className="sr-only">Abrir menú</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 px-6">
          <div className="bg-[#0b0b0b] rounded-xl p-4 flex flex-col gap-3">
            <a href="#packs" onClick={() => setOpen(false)} className="text-gray-300">Packs</a>
            <a href="#tecnologias" onClick={() => setOpen(false)} className="text-gray-300">Tecnologías</a>
            <a href="#nosotros" onClick={() => setOpen(false)} className="text-gray-300">Quiénes somos</a>
            <a href="#contacto" onClick={() => setOpen(false)} className="text-gray-300">Contacto</a>
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 bg-green-400 text-black rounded-lg font-semibold inline-block text-center">Cotizar</a>
          </div>
        </div>
      )}
    </header>
  );
}
