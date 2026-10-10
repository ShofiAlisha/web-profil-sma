
import Image from "next/image";
import Link from "next/link";
import { daftarBerita } from "@/data/berita";

export default function BeritaPage() {
  const beritaUnggulan = daftarBerita[0];
  const beritaLainnya = daftarBerita.slice(1);

  return (
    <main className="bg-[#faf9f6] text-[#1c2c43]">
      {/* Intro editorial */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-14 sm:px-10 lg:px-16 lg:pb-16 lg:pt-20">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#b99a5b]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7a3e]">
              Kabar dari Smalab
            </p>
          </div>

          <h1 className="font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            Cerita, Prestasi,
            <br />
            <span className="italic text-[#a88a50]">
              dan Kegiatan Sekolah.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Mengikuti setiap langkah, pencapaian, dan cerita inspiratif dari
            keluarga besar SMA Laboratorium UPGRIS.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-2">
          <span className="h-[3px] w-10 rounded-full bg-[#d2b477]" />
          <span className="h-[3px] w-4 rounded-full bg-[#dedbd2]" />
          <span className="h-[3px] w-4 rounded-full bg-[#dedbd2]" />
        </div>
      </section>

      {/* Berita unggulan */}
      {beritaUnggulan && (
        <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Link
            href={`/berita/${beritaUnggulan.id}`}
            className="group grid overflow-hidden rounded-2xl bg-[#142440] shadow-sm transition duration-500 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[360px] lg:min-h-[430px]">
              {beritaUnggulan.gambar ? (
                <Image
                  src={beritaUnggulan.gambar}
                  alt={beritaUnggulan.judul}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full min-h-[260px] items-center justify-center bg-gradient-to-br from-[#253c5b] via-[#142440] to-[#0c1729] sm:min-h-[360px] lg:min-h-[430px]">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-[#d2b477]/50 bg-white/5 p-3">
                      <Image
                        src="/images/logo.png"
                        alt="Logo SMA Laboratorium UPGRIS"
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#d2b477]">
                      SMA Laboratorium UPGRIS
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1729]/40 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="border border-[#d2b477]/40 px-3 py-1.5 uppercase tracking-[0.14em] text-[#f0d9a6]">
                  Berita Unggulan
                </span>
                <span className="text-slate-400">
                  {beritaUnggulan.tanggal}
                </span>
              </div>

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#d2b477]">
                {beritaUnggulan.kategori}
              </p>

              <h2 className="font-serif text-2xl leading-snug text-white transition-colors group-hover:text-[#f0d9a6] sm:text-3xl lg:text-4xl">
                {beritaUnggulan.judul}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                {beritaUnggulan.ringkasan}
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#f0d9a6]">
                Baca selengkapnya
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Daftar berita */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="mb-9 flex flex-col gap-4 border-b border-[#dedbd2] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3e]">
              Dari lingkungan sekolah
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Jelajahi Berita
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Beragam informasi, aktivitas, dan pencapaian yang menjadi bagian
            dari perjalanan Smalab.
          </p>
        </div>

        {beritaLainnya.length > 0 ? (
          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {beritaLainnya.map((berita, index) => (
              <Link
                key={berita.id}
                href={`/berita/${berita.id}`}
                className="group flex flex-col"
              >
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-[#e9e6de]">
                  {berita.gambar ? (
                    <Image
                      src={berita.gambar}
                      alt={berita.judul}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#253c5b] via-[#142440] to-[#0c1729]">
                      <Image
                        src="/images/logo.png"
                        alt="Logo SMA Laboratorium UPGRIS"
                        width={76}
                        height={76}
                        className="h-16 w-16 object-contain opacity-80 transition duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <span className="absolute left-4 top-4 bg-[#faf9f6] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#142440]">
                    {berita.kategori}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
                  <span>{berita.tanggal}</span>
                  <span className="h-1 w-1 rounded-full bg-[#b99a5b]" />
                  <span>Artikel</span>
                </div>

                <h3 className="font-serif text-xl leading-snug transition-colors group-hover:text-[#9a7a3e]">
                  {berita.judul}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {berita.ringkasan}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#9a7a3e]">
                  Baca berita
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <span className="sr-only">Berita nomor {index + 2}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-slate-500">
            Belum ada berita lainnya untuk ditampilkan.
          </p>
        )}
      </section>
    </main>
  );
}
