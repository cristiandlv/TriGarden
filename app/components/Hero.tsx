"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/arcana.svg", "/arcana.svg", "/hero-2.svg", "/hero-3.svg"];

export default function Hero() {
  return (
    <section className="px-6 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center section-card p-10 relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-black/60 ring-1 ring-black/5 dark:ring-white/6 shadow-2xl">
        {/* Decorative blurred shapes */}
        <div className="hidden md:block absolute -left-20 -top-20 w-72 h-72 bg-linear-to-br from-green-200/30 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="hidden md:block absolute -right-12 -bottom-12 w-56 h-56 bg-linear-to-tr from-cyan-200/20 to-transparent rounded-full blur-2xl pointer-events-none" aria-hidden />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
          <h1 className="hero-title font-extrabold leading-tight">
            Creamos experiencias web que hacen crecer tu negocio
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-xl text-lg">
            Diseñamos y desarrollamos soluciones digitales con foco en diseño, rendimiento y experiencia de usuario, pensadas para convertir visitas en oportunidades reales.
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Diseño · Performance · Funcionalidad</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl text-gray-700 dark:text-gray-300">
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium">Diseño</span>
              <p className="text-sm text-gray-500">Interfaces limpias y centradas en el usuario</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium">Performance</span>
              <p className="text-sm text-gray-500">Carga rápida y métricas optimizadas</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-medium">Funcionalidad</span>
              <p className="text-sm text-gray-500">Herramientas que realmente funcionan para tu negocio</p>
            </div>
          </div>

          <div className="mt-8 flex gap-3 items-center justify-center md:justify-start">
            <a href="#packs" aria-label="Ver packs" className="px-6 py-3 bg-linear-to-r from-green-400 to-green-500 text-black rounded-xl font-semibold shadow-lg hover:from-green-500 hover:to-green-600 transition">Ver packs</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center relative"
        >
            <div className="w-full max-w-lg md:max-w-xl">
            <div className="hero-figure relative rounded-3xl overflow-visible border border-gray-100 bg-white shadow-2xl dark:border-white/6 dark:bg-[#0b0b0b] transform -translate-y-1">
              {/* Ribbon / cordón decorative SVG overlapping the card for refined detail (more visible) */}
              <svg aria-hidden className="absolute left-0 top-1/4 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="ribbonGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
                    <stop offset="40%" stopColor="#16a34a" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity="0.12" />
                  </linearGradient>
                  <filter id="ribbonBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                <path d="M-40 200 C200 60, 420 340, 660 220 C900 100, 1060 320, 1320 220" stroke="url(#ribbonGrad)" strokeWidth="26" strokeLinecap="round" fill="none" opacity="0.95" filter="url(#ribbonBlur)"/>
                <path d="M-40 210 C200 80, 420 350, 660 240 C900 130, 1060 350, 1320 250" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.28" fill="none"/>
              </svg>

              <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
                <div className="hero-mockup transform -rotate-6 md:-rotate-6 translate-x-4 md:translate-x-8 scale-95 md:scale-100 shadow-2xl w-[110%] md:w-[105%]">
                  <Image src={images[0]} alt={`Captura de ejemplo — hero`} width={1200} height={800} className="object-cover w-full h-full rounded-2xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative plant illustration to give a real, brandable feeling */}
          <svg className="hidden md:block absolute -right-8 -bottom-5 w-40 h-40 opacity-80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M32 2C32 2 36 14 28 18C20 22 18 30 18 30" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 18C24 24 30 28 34 30C38 32 42 32 46 30" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 36C22 38 26 40 30 40C34 40 38 38 42 36C46 34 50 34 54 36" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
