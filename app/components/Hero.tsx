"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/hero-1.svg", "/hero-2.svg", "/hero-3.svg"];

export default function Hero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Creamos sitios web profesionales para hacer crecer tu negocio</h1>
          <p className="mt-6 text-gray-300 max-w-xl">Diseño moderno, desarrollo rápido y optimización orientada a resultados. Nos encargamos de que tu sitio sea escalable, accesible y fácil de administrar.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
            <a href="#packs" className="px-6 py-3 bg-green-400 text-black rounded-xl font-semibold shadow-md">Ver packs</a>
            <a href="#contacto" className="px-6 py-3 border border-white/20 rounded-xl">Contacto</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, idx) => (
              <div key={src} className="rounded-2xl overflow-hidden border border-white/6 bg-[#0b0b0b] shadow-lg">
                <Image src={src} alt={`Mockup ${idx + 1}`} width={900} height={600} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
