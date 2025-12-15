"use client";

import { useState } from "react";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://formspree.io/f/mnneypyw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        setSent(true);
        form.reset();
      } else {
        console.error("Formspree error:", result);
        setError("No se pudo enviar el mensaje. Intentá nuevamente.");
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión. Probá más tarde.");
    } finally {
      setLoading(false);
    }
  }

  const whatsappMessage = encodeURIComponent(
    "Hola, estoy buscando desarrollar un proyecto web y me gustaría recibir más información."
  );

  return (
    <section id="contacto" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="section-card p-8 md:p-10 relative overflow-hidden">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Hablemos de tu proyecto
            </h2>

            <p className="mt-3 text-center text-gray-500 max-w-xl mx-auto">
              Contanos qué necesitás y te respondemos a la brevedad.
            </p>

            {!sent ? (
              <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
                {/* Nombre */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
                  <FiUser className="text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre"
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
                  <FiMail className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                </div>

                {/* Mensaje */}
                <div className="flex items-start gap-3 rounded-xl border border-gray-200 px-4 py-3">
                  <FiMessageSquare className="text-gray-400 mt-1" />
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Contanos brevemente sobre tu proyecto"
                    className="flex-1 bg-transparent outline-none resize-none text-sm"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">
                    {error}
                  </p>
                )}

                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-xl font-semibold bg-green-500 text-black hover:opacity-90 transition disabled:opacity-60"
                  >
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </div>
                <p className="text-center text-xs text-gray-400 mt-3">
  ¿Preferís otro canal?{" "}
  <a
    href={`https://wa.me/5492644399880?text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-green-600 transition"
  >
    Escribinos por WhatsApp
  </a>
</p>

              </form>
            ) : (
              <div className="mt-12 flex flex-col items-center gap-4 text-center">
                <FiCheckCircle className="w-14 h-14 text-green-500" />

                <h3 className="text-2xl font-semibold">
                  ¡Mensaje enviado!
                </h3>

                <p className="text-gray-500 max-w-md text-sm">
                  Gracias por escribirnos. Te vamos a responder a la brevedad con una propuesta clara.
                </p>

                <div className="w-24 h-px bg-gray-200 my-2" />

                <p className="text-sm text-gray-400">
                  ¿Querés avanzar más rápido?
                </p>

                <a
                  href={`https://wa.me/5492644399880?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500 text-green-600 font-medium hover:bg-green-50 transition"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
