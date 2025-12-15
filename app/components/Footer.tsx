import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Marca */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/TriGarde.svg"
            alt="TriGarde"
            width={200}
            height={60}
            className="h-14 w-auto"
          />
          <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
            Estudio de desarrollo web enfocado en diseño, performance y crecimiento digital.
          </p>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Contacto
          </p>
          <p className="mt-2 text-sm text-gray-500">
            contacto@trigarde.com.ar
          </p>
          <p className="mt-4 text-xs text-gray-400">
            © {new Date().getFullYear()} TriGarde
          </p>
        </div>

        {/* Redes */}
        <div className="flex justify-center md:justify-end gap-4">
          <SocialLink href="https://www.instagram.com/trigarde" label="Instagram">
            <InstagramIcon />
          </SocialLink>

          <SocialLink href="https://www.linkedin.com/company/trigarde" label="LinkedIn">
            <LinkedinIcon />
          </SocialLink>

          <SocialLink href="https://www.facebook.com/trigarde" label="Facebook">
            <FacebookIcon />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-green-500 hover:text-black transition"
    >
      {children}
    </a>
  );
}

/* Icons */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 10.5v6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 8.5a1.5 1.5 0 1 0 0-3" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M12 14.5v-2a1.5 1.5 0 0 1 1.5-1.5H15v6h-2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 10.5v6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 8.5a1.5 1.5 0 1 0 0-3" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M12 14.5v-2a1.5 1.5 0 0 1 1.5-1.5H15v6h-2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
