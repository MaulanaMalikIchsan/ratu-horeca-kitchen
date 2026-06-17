import Navbar from "../../components/navbar";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
        <div>
          <h1 className="mb-4 text-5xl font-bold text-yellow-500">
            Portfolio
          </h1>

          <p className="mb-6 text-xl text-gray-400">
            Halaman portfolio sedang dalam tahap pengembangan.
          </p>

          <p className="text-gray-500">
            Dokumentasi proyek akan segera ditampilkan.
          </p>
        </div>
      </main>
    </>
  );
}