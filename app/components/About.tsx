import Image from "next/image";
import { FiUsers } from "react-icons/fi";

export default function About() {
  return (
    <section id="nosotros" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* CONTENEDOR GENERAL */}
        <div className="rounded-2xl border border-gray-200/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-8 md:p-12">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <FiUsers className="text-emerald-500 w-6 h-6" />
              Nosotros
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Trigarde es un estudio de desarrollo web especializado en crear
              sitios modernos, funcionales y preparados para crecer junto a cada
              proyecto.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Combinamos diseño, tecnología y una comunicación clara para
              ofrecer soluciones rápidas, seguras y fáciles de mantener.
            </p>
          </div>

          {/* EQUIPO */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-10">
              El equipo
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Cristian */}
              <article className="group rounded-xl border border-gray-200/10 bg-white/5 p-6 text-center transition hover:border-emerald-400/40">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/cris.png"
                    alt="Cristian - Frontend Developer"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-lg">Cristian</h4>
                <p className="text-sm text-emerald-400 mb-3">
                  Frontend Developer
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Especializado en interfaces modernas, diseño UI/UX y
                  desarrollo responsive, enfocado en la experiencia del
                  usuario.
                </p>
              </article>

              {/* Nicolás */}
              <article className="group rounded-xl border border-gray-200/10 bg-white/5 p-6 text-center transition hover:border-blue-400/40">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/nico.png"
                    alt="Nicolás - Backend Developer"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-lg">Nicolás</h4>
                <p className="text-sm text-blue-400 mb-3">
                  Backend & Coordinación
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Responsable de la lógica del sistema, integraciones y
                  coordinación general del proyecto.
                </p>
              </article>

              {/* Fausto */}
              <article className="group rounded-xl border border-gray-200/10 bg-white/5 p-6 text-center transition hover:border-gray-400/40">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/fausto.png"
                    alt="Fausto - Backend Developer"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-lg">Fausto</h4>
                <p className="text-sm text-emerald-400 mb-3">
                  Backend Developer
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Enfocado en backend, bases de datos y arquitectura técnica
                  escalable y segura.
                </p>
              </article>
            </div>

            {/* FOOTER */}
            <p className="mt-14 text-center text-gray-400 max-w-3xl mx-auto">
              Creemos en el trabajo en equipo, la transparencia y en construir
              soluciones digitales que realmente aporten valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
