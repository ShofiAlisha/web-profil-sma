import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e8e1d5] bg-white shadow-[0_4px_20px_rgba(20,36,64,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(20,36,64,0.12)]">
      <Link
        href={`/berita/${berita.id}`}
        className="block overflow-hidden bg-[#f2eee6]"
      >
        {berita.gambar ? (
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#142440] to-[#30496a]">
            <img
              src="/images/logo.png"
              alt="Logo SMA Laboratorium UPGRIS"
              className="h-20 w-20 object-contain opacity-90"
            />
          </div>
        )}
      </Link>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-[#f5edda] px-3 py-1.5 font-semibold text-[#8b6b2e]">
            {berita.kategori}
          </span>
          <span className="text-[#888888]">{berita.tanggal}</span>
        </div>

        <h3 className="mb-3 text-xl font-semibold leading-snug text-[#142440] transition-colors group-hover:text-[#a7833d]">
          <Link href={`/berita/${berita.id}`}>{berita.judul}</Link>
        </h3>

        <p className="mb-6 line-clamp-3 text-sm leading-7 text-[#6b7280]">
          {berita.ringkasan}
        </p>

        <Link
          href={`/berita/${berita.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#142440] transition-all hover:gap-3 hover:text-[#a7833d]"
        >
          Baca selengkapnya
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}