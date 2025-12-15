"use client";

import { IoLogoWhatsapp } from "react-icons/io5";

export default function WhatsAppButton({
  phone = "5492644399880",
  message = "Hola,%20quiero%20consultar%20sobre%20sus%20servicios",
}) {
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-6 bottom-6 z-50 group"
    >
      {/* Halo */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 blur-xl opacity-0 group-hover:opacity-100 transition" />

      <span className="relative w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-br from-green-500 to-green-600 text-white shadow-2xl transition-transform group-hover:-translate-y-1">
        <IoLogoWhatsapp className="w-7 h-7" />
      </span>
    </a>
  );
}
