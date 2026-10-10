const ekstrakurikuler = [
  {
    nomor: "01",
    nama: "Seni Tari",
    kategori: "SENI & BUDAYA",
    deskripsi:
      "Menjadi ruang bagi peserta didik untuk mengenal, melestarikan, dan mengekspresikan kekayaan seni tari melalui gerak dan kreativitas.",
    simbol: "✧",
    warna: "from-rose-100 to-orange-50",
  },
  {
    nomor: "02",
    nama: "Pramuka",
    kategori: "KEPEMIMPINAN",
    deskripsi:
      "Membangun kemandirian, kedisiplinan, kerja sama, serta kepedulian terhadap sesama dan lingkungan.",
    simbol: "⚜",
    warna: "from-amber-100 to-yellow-50",
  },
  {
    nomor: "03",
    nama: "Paskibra",
    kategori: "KEDISIPLINAN",
    deskripsi:
      "Mengembangkan sikap disiplin, tanggung jawab, kekompakan, dan jiwa nasionalisme melalui kegiatan baris-berbaris.",
    simbol: "★",
    warna: "from-red-100 to-rose-50",
  },
  {
    nomor: "04",
    nama: "Seni Musik",
    kategori: "SENI & KREATIVITAS",
    deskripsi:
      "Menyalurkan bakat bermusik, melatih kepekaan artistik, dan menumbuhkan kreativitas melalui eksplorasi musik.",
    simbol: "♫",
    warna: "from-sky-100 to-indigo-50",
  },
  {
    nomor: "05",
    nama: "Karya Ilmiah",
    kategori: "RISET & INOVASI",
    deskripsi:
      "Mendorong rasa ingin tahu, kemampuan berpikir kritis, dan kreativitas peserta didik dalam mengeksplorasi gagasan ilmiah.",
    simbol: "✳",
    warna: "from-emerald-100 to-teal-50",
  },
];

export default function EkstrakurikulerPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1c2c43]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#172b4d] px-6 py-24 text-center text-white sm:py-32">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#d2b477]/20" />
        <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-[#d2b477]/20" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e5c98e]">
            Explore Your Potential
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight sm:text-6xl">
            Tumbuh, Berkarya,
            <span className="mt-2 block italic text-[#e5c98e]">
              dan Berprestasi.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Ruang bagi peserta didik SMA Laboratorium UPGRIS untuk
            mengembangkan minat, menggali potensi, dan membangun karakter
            melalui kegiatan ekstrakurikuler.
          </p>
          <div className="mx-auto mt-9 h-px w-20 bg-[#d2b477]" />
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-10 sm:pt-20">
        <div className="grid gap-5 sm:grid-cols-[1fr_1.2fr] sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a08043]">
              Beyond The Classroom
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-snug sm:text-4xl">
              Temukan passion-mu.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#657084] sm:justify-self-end">
            Belajar tidak hanya berlangsung di dalam kelas. Melalui kegiatan
            ekstrakurikuler, siswa dapat mengasah keterampilan, menjalin
            kebersamaan, dan menemukan potensi terbaik dalam diri mereka.
          </p>
        </div>
      </section>

      {/* Extracurricular cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 sm:pb-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ekstrakurikuler.map((ekskul) => (
            <article
              key={ekskul.nomor}
              className="group overflow-hidden rounded-2xl border border-[#e8e1d5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172b4d]/10"
            >
              <div
                className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${ekskul.warna}`}
              >
                <div className="absolute inset-4 rounded-xl border border-white/70" />
                <span className="absolute left-7 top-6 text-xs font-semibold tracking-[0.2em] text-[#172b4d]/55">
                  {ekskul.nomor}
                </span>
                <span className="font-serif text-7xl text-[#172b4d]/75 transition duration-300 group-hover:scale-110">
                  {ekskul.simbol}
                </span>
                <span className="absolute bottom-6 right-7 text-[10px] font-semibold tracking-[0.2em] text-[#172b4d]/55">
                  SMA LAB UPGRIS
                </span>
              </div>

              <div className="p-7">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-[#a08043]">
                  {ekskul.kategori}
                </p>
                <h3 className="mt-3 font-serif text-2xl">
                  {ekskul.nama}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#657084]">
                  {ekskul.deskripsi}
                </p>
                <div className="mt-6 h-px w-12 bg-[#d2b477] transition-all duration-300 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-[#89909c]">
          Informasi deskriptif pada halaman ini merupakan pengenalan umum
          kegiatan, bukan jadwal atau ketentuan resmi masing-masing ekskul.
        </p>
      </section>

      {/* Closing */}
      <section className="bg-[#f0eadf] px-6 py-16 text-center sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a08043]">
          Your Journey Starts Here
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
          Setiap potensi punya ruang untuk berkembang.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#657084]">
          Jadikan pengalaman di sekolah sebagai kesempatan untuk belajar,
          berkolaborasi, dan menciptakan karya yang bermakna.
        </p>
      </section>
    </main>
  );
}