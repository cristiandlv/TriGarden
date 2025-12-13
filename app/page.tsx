"use client"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Packs from "./components/Packs";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Packs />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
