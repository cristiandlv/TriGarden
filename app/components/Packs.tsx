"use client"

import { motion } from "framer-motion";

import { FiCheck } from "react-icons/fi";

const packs = [
  {
    title: "Pack Básico",
    price: "$300",
    desc: ["Diseño responsive", "Hasta 5 secciones", "SEO básico"],
  },
  {
    title: "Pack Estándar",
    price: "$700",
    desc: ["Todo del básico", "Integración CMS", "Formularios y map"],
  },
  {
    title: "Pack Premium",
    price: "Desde $1500",
    desc: ["E-commerce", "Pasarela de pago", "Optimización y soporte"],
  },
];

export default function Packs() {
  return (
    <section id="packs" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Packs</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * i }}
              className="relative bg-linear-to-b from-[#0b0b0b] to-[#0f0f0f] p-6 rounded-3xl shadow-lg border border-white/6 overflow-hidden"
            >
              <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-green-400 via-purple-500 to-blue-400 opacity-10 blur-md"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-4">{p.desc.join(' • ')}</p>

                  <ul className="text-sm text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                    {p.desc.map((d) => (
                      <li key={d} className="flex items-center gap-3">
                        <FiCheck className="w-4 h-4 text-green-500" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{p.price}</div>
                    <a href="#contacto" className="px-4 py-2 bg-green-400 text-black rounded-lg font-semibold">Elegir</a>
                  </div>
                </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
