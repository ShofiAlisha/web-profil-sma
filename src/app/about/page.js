import Image from "next/image";
import Link from "next/link";

const misi = [
  "Melaksanakan kegiatan pembelajaran ramah anak berbasis teknologi dan karakter kebangsaan.",
  "Mengembangkan keterampilan peserta didik berbasis life skills.",
  "Mengembangkan budaya sekolah yang humanis dalam mencapai tujuan pendidikan nasional.",
  "Menjadikan sekolah yang berintegritas dan diminati masyarakat.",
];

export default function AboutPage() {
  return (
    <main className="bg-[#faf9f6] text-[#1c2c43]">
      {/* HERO */}
      <section className="relative isolate min-h-[440px] overflow-hidden bg-[#142440] sm:min-h-[500px]">
        <Image
          src="/images/sekolah.jpg"
          alt="Gedung SMA Laboratorium UPGRIS"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101d33]/95 via-[#142440]/75 to-[#142440]/25" />

        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-6 py-20 sm:min-h-[500px] sm:px-10 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f0d9a6] sm:text-sm">
              Mengenal Sekolah Kami
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
              Lebih Dekat dengan
              <span className="font-serif mt-2 block italic text-[#f0d9a6]">
                SMA Laboratorium UPGRIS
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Mengenal identitas, visi, dan misi sekolah dalam membangun
              lingkungan pendidikan yang unggul, humanis, dan berkarakter.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#d2b477]" />
      </section>

      {/* PROFIL SEKOLAH */}
      <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-28 w-28 border-b-2 border-l-2 border-[#d2b477]" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e8e3d8]">
              <Image
                src="/images/sekolah.jpg"
                alt="Lingkungan SMA Laboratorium UPGRIS"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 right-4 rounded-sm bg-white px-5 py-4 shadow-lg sm:right-8 sm:px-7">
              <p className="font-serif text-lg italic text-[#9a793b]">
                Pendidikan dan Karakter
              </p>
              <p className="mt-1 text-xs text-[#647087]">
                SMA Laboratorium UPGRIS
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a793b]">
              Profil Sekolah
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Bertumbuh, Belajar, dan Mengembangkan Potensi
            </h2>

            <div className="mt-6 h-px w-20 bg-[#d2b477]" />

            <p className="mt-6 text-sm leading-8 text-[#5d6675] sm:text-base">
              SMA Laboratorium UPGRIS merupakan institusi pendidikan
              di lingkungan Universitas PGRI Semarang. Sekolah menjadi
              bagian dari perjalanan peserta didik dalam memperoleh
              pengetahuan, mengembangkan keterampilan, dan membangun
              karakter untuk menghadapi masa depan.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#5d6675] sm:text-base">
              Dengan mengedepankan pembelajaran yang ramah anak,
              pemanfaatan teknologi, serta karakter kebangsaan, sekolah
              berupaya menciptakan lingkungan pendidikan yang mendukung
              perkembangan peserta didik.
            </p>

            <Link
              href="/berita"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#d2b477] pb-2 text-sm font-semibold transition hover:text-[#9a793b]"
            >
              Lihat Kegiatan Sekolah
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* IDENTITAS SEKOLAH */}
      <section className="border-y border-[#e8e1d4] bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#e8e1d4] bg-[#faf9f6] p-3">
            <Image
              src="/images/logo.png"
              alt="Logo SMA Laboratorium UPGRIS"
              width={90}
              height={90}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a793b]">
              Identitas Sekolah
            </p>

            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              SMA Laboratorium UPGRIS
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5d6675]">
              Jl. Gajah Raya No. 40, Siwalan, Kecamatan Gayamsari,
              Kota Semarang, Jawa Tengah 50162.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SMA+Laboratorium+UPGRIS+Semarang"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#9a793b] hover:underline"
            >
              Lihat lokasi sekolah <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* VISI */}
      <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a793b]">
            Arah Pendidikan
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Visi dan Misi Sekolah
          </h2>

          <div className="mt-10 overflow-hidden rounded-sm bg-[#142440]">
            <div className="grid lg:grid-cols-[220px_1fr]">
              <div className="flex items-center border-b border-white/15 px-7 py-6 lg:border-b-0 lg:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f0d9a6]">
                  Visi Sekolah
                </p>
              </div>

              <div className="px-7 py-9 sm:px-10 sm:py-12">
                <span className="font-serif text-5xl text-[#d2b477]">
                  “
                </span>

                <h3 className="font-serif -mt-1 max-w-3xl text-2xl italic leading-relaxed text-white sm:text-3xl">
                  Mewujudkan Peserta Didik yang unggul dan berjati diri.
                </h3>
              </div>
            </div>
          </div>

          {/* MISI */}
          <div className="mt-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a793b]">
              Misi Sekolah
            </p>

            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Langkah untuk Mewujudkan Visi
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {misi.map((item, index) => (
                <article
                  key={item}
                  className="group border border-[#e8e1d4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d2b477] hover:shadow-lg sm:p-8"
                >
                  <p className="font-serif text-3xl italic text-[#b6975b]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="mt-5 h-px w-12 bg-[#d2b477] transition-all duration-300 group-hover:w-20" />

                  <p className="mt-5 text-sm leading-7 text-[#4e5a6e] sm:text-base">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* SLOGAN */}
          <div className="mt-16 border-t border-[#e8e1d4] pt-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a793b]">
              Slogan Sekolah
            </p>

            <p className="font-serif mx-auto mt-5 max-w-3xl text-2xl italic leading-relaxed sm:text-3xl">
              “Membentuk Insan Cerdas, Kompetitif, dan Berkarakter Pancasila.”
            </p>
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="bg-[#142440] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f0d9a6]">
          Kenali Lebih Jauh
        </p>

        <h2 className="font-serif mx-auto mt-4 max-w-2xl text-3xl italic leading-tight sm:text-4xl">
          Setiap kegiatan adalah bagian dari perjalanan pendidikan.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
          Ikuti kabar, kegiatan, dan pencapaian terbaru SMA Laboratorium UPGRIS.
        </p>

        <Link
          href="/berita"
          className="mt-8 inline-flex items-center gap-3 bg-[#d2b477] px-6 py-3 text-sm font-semibold text-[#142440] transition hover:bg-[#f0d9a6]"
        >
          Jelajahi Berita <span aria-hidden="true">↗</span>
        </Link>
      </section>
          {/* KONTAK SEKOLAH */}
      <section className="bg-[#faf9f6] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9a793b]">
              HUBUNGI KAMI
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Kami siap menyambutmu.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#657084]">
              Ingin mengenal SMA Laboratorium UPGRIS lebih dekat?
              Temukan lokasi sekolah melalui peta berikut.
            </p>
          </div>

                    <div className="border border-[#e8e1d4] bg-white p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a793b]">
              INFORMASI KONTAK
            </p>

            <h3 className="mt-4 font-serif text-2xl">
              SMA Laboratorium UPGRIS
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-lg text-[#9a793b]">⌖</span>
                <div>
                  <p className="text-sm font-semibold">Alamat</p>
                  <p className="mt-1 text-sm leading-6 text-[#657084]">
                    Jl. Gajah Raya No. 40, Siwalan, Gayamsari, Kota Semarang,
                    Jawa Tengah 50162.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#9a793b]">☎</span>
                <div>
                  <p className="text-sm font-semibold">Telepon / WhatsApp</p>
                  <a
                    href="https://wa.me/6282131406996"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-[#657084] transition hover:text-[#9a793b]"
                  >
                    0821-3140-6996 ↗
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#9a793b]">✉</span>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a
                    href="mailto:info@smalabupgris.sch.id"
                    className="mt-1 inline-block break-all text-sm text-[#657084] transition hover:text-[#9a793b]"
                  >
                    info@smalabupgris.sch.id
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SMA+Laboratorium+UPGRIS+Semarang"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 bg-[#172b4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9a793b]"
            >
              Lihat Lokasi <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
