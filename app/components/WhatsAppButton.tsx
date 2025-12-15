"use client"

import { IoLogoWhatsapp } from "react-icons/io5";

export default function WhatsAppButton({ phone = "5492644399880", message = "Hola,%20quiero%20consultar%20sobre%20sus%20servicios" }: { phone?: string; message?: string }) {
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-6 bottom-6 z-50 bg-linear-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:-translate-y-1"
    >
      <IoLogoWhatsapp className="w-6 h-6" />
    </a>
  );
}
