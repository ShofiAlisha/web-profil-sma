
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarBerita } from "@/data/berita";

export function generateStaticParams() {
  return daftarBerita.map((berita) => ({
    id: berita.id,
  }));
}

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const berita = daftarBerita.find((item) => item.id === id);

  if (!berita) {
    notFound();
  }

  const isiBerita = Array.isArray(berita.isi)
    ? berita.isi
    : [berita.isi].filter(Boolean);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1c2c43]">
      {/* Article header */}
      <header className="relative overflow-hidden bg-[#142440]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d2b477]/10 sm:h-[28rem] sm:w-[28rem]" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#d2b477]/15 sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-5xl px-6 pb-14 pt-8 sm:px-10 sm:pb-20 sm:pt-10 lg:px-16">
          <Link
            href="/berita"
            className="group inline-flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-[#f0d9a6]"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Kembali ke Berita
          </Link>

          <div className="mt-12 sm:mt-16">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs">
              <span className="border border-[#d2b477]/40 px-3 py-2 font-medium uppercase tracking-[0.16em] text-[#f0d9a6]">
                {berita.kategori}
              </span>
              <span className="text-white/50">{berita.tanggal}</span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl leading-[1.2] text-white sm:text-4xl lg:text-5xl">
              {berita.judul}
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {berita.ringkasan}
            </p>

            <div className="mt-9 h-[2px] w-14 bg-[#d2b477]" />
          </div>
        </div>
      </header>

      {/* Article image */}
      <section className="mx-auto max-w-5xl px-6 pt-8 sm:px-10 sm:pt-12 lg:px-16">
        <div className="relative overflow-hidden rounded-xl bg-[#e9e6de]">
          {berita.gambar ? (
            <Image
              src={berita.gambar}
              alt={berita.judul}
              width={1400}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="max-h-[560px] w-full object-cover"
            />
          ) : (
            <div className="flex min-h-[260px] items-center justify-center bg-gradient-to-br from-[#253c5b] via-[#142440] to-[#0c1729] sm:min-h-[420px]">
              <div className="text-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo SMA Laboratorium UPGRIS"
                  width={100}
                  height={100}
                  className="mx-auto h-20 w-20 object-contain sm:h-24 sm:w-24"
                />
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#f0d9a6]">
                  SMA Laboratorium UPGRIS
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Article content */}
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-14">
        <div className="mb-10 border-l-2 border-[#d2b477] pl-5 sm:pl-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3e]">
            Artikel Sekolah
          </p>
          <p className="mt-3 font-serif text-lg leading-8 text-[#263e60] sm:text-xl sm:leading-9">
            {berita.ringkasan}
          </p>
        </div>

        <div className="space-y-6 text-[15px] leading-8 text-[#515b69] sm:text-base sm:leading-9">
          {isiBerita.map((paragraf, index) => (
            <p key={index}>{paragraf}</p>
          ))}
        </div>

        {/* Back navigation */}
        <div className="mt-14 border-t border-[#dedbd2] pt-8">
          <Link
            href="/berita"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#142440] transition-colors hover:text-[#9a7a3e]"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Kembali ke semua berita
          </Link>
        </div>
      </section>
    </main>
  );
}
