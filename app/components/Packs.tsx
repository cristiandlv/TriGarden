"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

const packs = [
  {
    title: "Pack Básico",
    note: "Presencia profesional clara y efectiva",
    desc: [
      "Landing page profesional",
      "Diseño responsive",
      "Hasta 5 secciones optimizadas",
    ],
  },
  {
    title: "Pack Estándar",
    note: "La opción más elegida por nuestros clientes",
    highlighted: true,
    desc: [
      "Web corporativa completa",
      "CMS administrable",
      "Formularios y contacto",
    ],
  },
  {
    title: "Pack Tienda",
    note: "Implementación inicial para vender online",
    desc: [
      "Tienda Nube o Empretienda",
      "Configuración estándar",
      "Carga inicial de productos",
    ],
  },
  {
    title: "Pack Premium",
    note: "Desarrollo a medida y soluciones avanzadas",
    desc: [
      "Funcionalidades personalizadas",
      "Integraciones y pagos online",
      "Soporte y mejoras continuas",
    ],
  },
];

export default function Packs() {
  return (
    <section id="packs" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Soluciones y Packs
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-14">
          Diseñamos soluciones digitales adaptadas a distintos objetivos y
          niveles de complejidad.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.05, delay: i * 0.03 }}
              className={`relative rounded-xl p-6 flex flex-col justify-between
                border bg-white dark:bg-black/60
                transition-all
                ${
                  p.highlighted
                    ? "border-green-400 shadow-xl shadow-green-500/10"
                    : "border-black/10 dark:border-white/10 hover:border-green-300/60"
                }`}
            >
              {/* Badge recomendado */}
              {p.highlighted && (
                <span className="absolute -top-3 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-green-400 text-black shadow-sm">
                  Recomendado
                </span>
              )}

              {/* HEADER */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {p.note}
                </p>

                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                  {p.desc.map((d) => (
                    <li key={d} className="flex gap-2">
                      <FiCheck className="text-green-500 mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FOOTER */}
              <div className="mt-6">
                <a
                  href={`https://wa.me/5492644399880?text=${encodeURIComponent(
                    `Hola, quiero más información sobre el ${p.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold text-sm
                  bg-linear-to-r from-green-400 to-green-500 text-black
                  hover:from-green-500 hover:to-green-600 transition shadow-sm"
                >
                  <IoLogoWhatsapp className="w-4 h-4" />
                  Consultar
                </a>

                <a
                  href={`https://wa.me/5492644399880?text=${encodeURIComponent(
                    "Hola, quisiera una cotización personalizada"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-xs text-gray-400 mt-3 hover:text-gray-700 dark:hover:text-white transition"
                >
                  Cotización personalizada
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
