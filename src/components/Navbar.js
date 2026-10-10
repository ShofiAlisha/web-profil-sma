import Link from "next/link";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Profil Sekolah" },
  { href: "/ekstrakurikuler", label: "Ekstrakurikuler" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9c69a]/40 bg-[#fffdf8]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="SMA Laboratorium UPGRIS - Beranda"
        >
          <img
            src="/images/logo.png"
            alt="Logo SMA Laboratorium UPGRIS"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />

          <div>
            <p className="text-sm font-bold tracking-wide text-[#172b4d] sm:text-base">
              SMA LABORATORIUM
            </p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a793b] sm:text-xs">
              Universitas PGRI Semarang
            </p>
          </div>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="flex flex-wrap items-center justify-center gap-1 sm:gap-2"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#34445e] transition duration-200 hover:bg-[#f1eadb] hover:text-[#9a793b] sm:px-4"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/berita"
            className="ml-1 rounded-full bg-[#172b4d] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#9a793b] sm:ml-2"
          >
            Jelajahi Berita
          </Link>
        </nav>
      </div>
    </header>
  );
}