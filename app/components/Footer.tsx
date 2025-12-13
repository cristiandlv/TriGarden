export default function Footer() {
  return (
    <footer className="border-t border-white/6 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} TriGarden — Desarrollo Web</div>
        <div className="text-sm text-gray-400">Contacto: contacto@trigarden.example</div>
      </div>
    </footer>
  );
}
