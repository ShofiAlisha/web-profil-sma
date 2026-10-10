import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";

export default function Home() {
  return (
    <div className="bg-[#faf9f6] text-[#1c2c43]">
      {/* HERO BANNER */}
      <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#142440] sm:min-h-[480px] lg:min-h-[520px]">
        <img
          src="/images/sekolah.jpg"
          alt="Gedung SMA Laboratorium UPGRIS"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101d32]/95 via-[#101d32]/65 to-[#101d32]/15" />

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#101d32]/50 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-24 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d2b477]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0d9a6] sm:text-sm">
                Selamat Datang di Website Resmi
              </p>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              SMA Laboratorium
              <span className="mt-2 block font-serif text-5xl font-medium italic tracking-[-0.04em] text-[#f0d9a6] sm:text-7xl lg:text-8xl">
                UPGRIS
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Membentuk insan cerdas, kompetitif, dan berkarakter Pancasila.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#d2b477] px-6 py-3.5 text-sm font-semibold text-[#142440] transition-colors hover:bg-[#ead4a5]"
              >
                Profil Sekolah
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/berita"
                className="inline-flex items-center gap-3 border border-white/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#f0d9a6] hover:text-[#f0d9a6]"
              >
                Berita Sekolah
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITAS SEKOLAH */}
      <section className="border-b border-[#e8e3d9] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Logo SMA Laboratorium UPGRIS"
              className="h-16 w-16 shrink-0 object-contain"
            />

            <div>
              <h2 className="text-base font-semibold sm:text-lg">
                SMA Laboratorium UPGRIS
              </h2>
              <p className="mt-1 text-sm text-[#777d86]">
                Semarang, Jawa Tengah
              </p>
            </div>
          </div>

          <div className="max-w-md border-l-2 border-[#d2b477] pl-4">
            <p className="text-sm leading-7 text-[#626b78]">
              Lingkungan pendidikan untuk mendukung perkembangan pengetahuan,
              potensi, dan karakter peserta didik.
            </p>
          </div>
        </div>
      </section>

      {/* PROFIL SINGKAT */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833d]">
            Mengenal Sekolah
          </p>

          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Pendidikan untuk Masa Depan yang Lebih Baik
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#687180] sm:text-base">
            SMA Laboratorium UPGRIS merupakan institusi pendidikan di Kota
            Semarang. Website ini menyajikan informasi mengenai profil,
            identitas, dan berita sekolah dalam satu tempat.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-3 border-b border-[#c8a96a] pb-2 text-sm font-semibold text-[#142440] transition-colors hover:text-[#a7833d]"
          >
            Kenali sekolah lebih lanjut
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative">
          <img
            src="/images/sekolah.jpg"
            alt="Tampilan gedung SMA Laboratorium UPGRIS"
            className="h-64 w-full object-cover sm:h-80"
          />

          <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-[#d2b477]" />
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="border-t border-[#e8e3d9] bg-[#f1eee7] px-6 py-16 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#a7833d]">
                Informasi Sekolah
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Berita Terbaru
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#687180]">
                Informasi dan cerita seputar pendidikan, kegiatan, serta
                perkembangan sekolah.
              </p>
            </div>

            <Link
              href="/berita"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#142440] transition-colors hover:text-[#a7833d]"
            >
              Lihat semua berita
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {daftarBerita.slice(0, 3).map((berita) => (
              <BeritaCard key={berita.id} berita={berita} />
            ))}
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="bg-[#142440] px-6 py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5d4ad]">
              SMA Laboratorium UPGRIS
            </p>

            <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug sm:text-3xl">
              Cerdas, kompetitif, dan berkarakter Pancasila.
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#d2b477] px-6 py-3 text-sm font-semibold text-[#f0d9a6] transition-colors hover:bg-[#d2b477] hover:text-[#142440]"
          >
            Tentang Sekolah
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}