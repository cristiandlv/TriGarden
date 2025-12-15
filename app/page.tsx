import Hero from "./components/Hero";
import Packs from "./components/Packs";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function LandingPage() {
  return (
    <>
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* Propuesta de valor */}
        <Hero />

        {/* Servicios / planes */}
        <Packs />

        {/* Quiénes somos */}
        <About />

        {/* Stack tecnológico */}
        <Technologies />

        {/* Objeciones frecuentes */}
        <FAQ />

        {/* Conversión */}
        <Contact />
      </main>

      {/* Footer fuera del main (buena práctica semántica) */}
      <Footer />
    </>
  );
}
