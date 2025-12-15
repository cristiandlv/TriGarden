"use client"

import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="section-card p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contacto</h2>

          <form className="grid gap-4">
            <label className="sr-only">Nombre</label>
            <div className="flex items-center gap-3 bg-transparent rounded-xl border border-gray-100 p-3">
              <FiUser className="w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Nombre" className="flex-1 p-3 bg-transparent outline-none" />
            </div>

            <label className="sr-only">Email</label>
            <div className="flex items-center gap-3 bg-transparent rounded-xl border border-gray-100 p-3">
              <FiMail className="w-5 h-5 text-gray-400" />
              <input type="email" placeholder="Email" className="flex-1 p-3 bg-transparent outline-none" />
            </div>

            <label className="sr-only">Mensaje</label>
            <div className="flex items-start gap-3 bg-transparent rounded-xl border border-gray-100 p-3">
              <FiMessageSquare className="w-5 h-5 text-gray-400 mt-2" />
              <textarea placeholder="Mensaje" rows={6} className="flex-1 p-3 bg-transparent outline-none resize-none text-sm" />
            </div>

            <div className="flex justify-center">
              <button className="px-6 py-3 bg-linear-to-r from-green-400 to-green-500 text-black rounded-md font-semibold shadow-sm">Enviar mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
