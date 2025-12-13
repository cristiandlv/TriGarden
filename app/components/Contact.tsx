"use client"

export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contacto</h2>

        <form className="grid gap-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded-xl bg-[#0b0b0b] border border-white/6 outline-none" />
          <input type="email" placeholder="Email" className="p-3 rounded-xl bg-[#0b0b0b] border border-white/6 outline-none" />
          <textarea placeholder="Mensaje" rows={5} className="p-3 rounded-xl bg-[#0b0b0b] border border-white/6 outline-none" />
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-green-400 text-black rounded-xl font-semibold">Enviar mensaje</button>
          </div>
        </form>
      </div>
    </section>
  );
}
