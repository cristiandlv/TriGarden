"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faq = [
  {
    q: "¿Cuánto tiempo tarda en estar lista mi página web?",
    a: "Depende del tipo de sitio y su complejidad. En general puede demorar entre 3 semanas y 2 meses según funcionalidades y revisiones.",
  },
  {
    q: "¿Cuánto cuesta una página web?",
    a: "Nuestros precios van desde USD 200 hasta USD 900 aprox. Ofrecemos packs y presupuestos personalizados según cada proyecto.",
  },
  {
    q: "¿Qué es el hosting y el dominio?",
    a: "El dominio es el nombre del sitio y el hosting es donde se aloja. Podemos gestionar ambos si lo necesitás.",
  },
  {
    q: "¿Qué necesito para comenzar?",
    a: "Texto, logo, imágenes y una idea general del proyecto. Si no tenés todo, te ayudamos a organizarlo.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-3">
          {faq.map((f, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={f.q}
                className="rounded-xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <FiChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-gray-500">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
