import { FiUsers } from "react-icons/fi";

export default function About() {
  return (
    <section id="nosotros" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="section-card p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-3"><FiUsers className="w-6 h-6 text-green-500" /> Nosotros</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
              Trigarde es un estudio de desarrollo web formado por un equipo especializado en frontend y backend, enfocado en crear sitios modernos, funcionales y pensados para crecer junto a cada proyecto.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Trabajamos con una metodología clara, comunicación directa y una fuerte atención al detalle. Creemos que una buena web no solo debe verse bien, sino también ser rápida, segura y fácil de mantener.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Nos involucramos en cada proyecto de principio a fin, acompañando a nuestros clientes tanto en el desarrollo como en el mantenimiento posterior.
            </p>
          </div>

          {/* Equipo */}
          <div className="mt-8 md:mt-12">
            <h3 className="text-2xl font-semibold text-center mb-6">El equipo</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <article className="p-5 rounded-xl border shadow-sm section-card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-green-400 to-green-300 flex items-center justify-center font-bold text-black">C</div>
                  <div>
                    <div className="font-semibold">Cristian</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">Especializado en interfaces modernas, diseño web y experiencia de usuario. Se encarga de que cada sitio sea visualmente atractivo, claro y optimizado para distintos dispositivos.</p>
              </article>

              <article className="p-5 rounded-xl border shadow-sm section-card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-purple-500 to-blue-400 flex items-center justify-center font-semibold text-white">N</div>
                  <div>
                    <div className="font-semibold">Nicolás</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Backend Developer & Coordinación</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">Responsable de la lógica del sistema, integraciones y organización del proyecto. Es el principal punto de contacto con el cliente y quien asegura que cada etapa avance correctamente.</p>
              </article>

              <article className="p-5 rounded-xl border shadow-sm section-card">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center font-semibold text-black">F</div>
                  <div>
                    <div className="font-semibold">Fausto</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Backend Developer</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">Enfocado en el desarrollo del backend, bases de datos y estructura técnica. Garantiza que los proyectos sean estables, escalables y seguros.</p>
              </article>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 font-medium">Creemos en el trabajo en equipo, la transparencia y en construir soluciones digitales que realmente aporten valor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

