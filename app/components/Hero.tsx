"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center section-card p-8 md:p-12 backdrop-blur-sm bg-white/80 dark:bg-black/60 ring-1 ring-black/5 dark:ring-white/10 shadow-2xl">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            {/* H1 optimizado */}
            <h1 className="hero-title font-extrabold leading-tight">
              Desarrollo web profesional
              <span className="block text-green-500">
                moderno, claro y orientado a resultados
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Diseñamos y desarrollamos sitios web que transmiten confianza,
              cargan rápido y están pensados para crecer junto a tu proyecto.
            </p>




            {/* Refuerzo de valor */}
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Diseño · Performance · Experiencia de usuario
            </p>

            {/* Beneficios claros */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto md:mx-0">
              <div>
                <span className="text-sm font-medium">Diseño</span>
                <p className="text-sm text-gray-500">
                  Estética clara y profesional
                </p>
              </div>
              <div>
                <span className="text-sm font-medium">Velocidad</span>
                <p className="text-sm text-gray-500">
                  Sitios rápidos y optimizados
                </p>
              </div>
              <div>
                <span className="text-sm font-medium">Conversión</span>
                <p className="text-sm text-gray-500">
                  Pensados para generar contactos
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#packs"
                className="px-6 py-3 bg-linear-to-r from-green-400 to-green-500 text-black rounded-xl font-semibold shadow-lg hover:from-green-500 hover:to-green-600 transition"
              >
                Ver packs
              </a>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl bg-linear-to-br from-green-200/30 via-transparent to-cyan-200/20 blur-2xl"
            />

            <div className="relative w-full max-w-xl">
              <div className="relative transform -rotate-4 md:-rotate-6 shadow-2xl rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white">
                <Image
                  src="/arcana.svg"
                  alt="Ejemplo de sitio web profesional para emprendedores"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
