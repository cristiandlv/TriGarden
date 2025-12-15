import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel } from "react-icons/si"; 

const tech = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Vercel", Icon: SiVercel },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Tecnologías que usamos</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tech.map(({ name, Icon }) => (
            <div key={name} className="flex items-center gap-3 px-4 py-3 section-card rounded-lg text-gray-700 dark:text-gray-200">
              <Icon className="w-5 h-5 text-green-500" aria-hidden />
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
