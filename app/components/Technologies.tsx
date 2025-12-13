export default function Technologies() {
  const tech = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"];

  return (
    <section id="tecnologias" className="px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Tecnologías que usamos</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tech.map((t) => (
            <div key={t} className="px-4 py-2 bg-[#0f0f0f] rounded-lg text-gray-200 border border-white/6">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
