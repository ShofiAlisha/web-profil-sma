export default function Footer() {
  return (
    <footer className="bg-blue-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-bold">SMA Laboratorium UPGRIS</h2>
          <p className="mt-1 text-sm text-blue-200">
            Membentuk Insan Cerdas, Kompetitif, dan Berkarakter Pancasila
          </p>
        </div>

        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} SMA Laboratorium UPGRIS
        </p>
      </div>
    </footer>
  );
}