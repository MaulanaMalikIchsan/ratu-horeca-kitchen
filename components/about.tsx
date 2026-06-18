export default function About() {
  const features = [
    {
      title: "General Contractor",
      description: "Mengelola proyek kitchen dari awal hingga selesai.",
    },
    {
      title: "Stainless Fabrication",
      description: "Produksi custom stainless sesuai kebutuhan.",
    },
    {
      title: "Kitchen Equipment",
      description: "Penyedia berbagai peralatan kitchen profesional.",
    },
    {
      title: "After Sales Support",
      description: "Dukungan purna jual dan maintenance.",
    },
    {
      title: "Workshop Sendiri",
      description: "Kontrol kualitas dan pengerjaan lebih optimal.",
    },
    {
      title: "End-to-End Solution",
      description: "Dari desain hingga instalasi dalam satu layanan.",
    },
  ];

  return (
    <section 
    id="about"
    className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-3 text-yellow-500 font-semibold">
            TENTANG KAMI
          </p>

          <h2 className="text-4xl font-bold text-white">
            Ratu Horeca Kitchen
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Solusi kitchen profesional mulai dari desain,
            fabrikasi, pengadaan peralatan hingga instalasi
            untuk restoran, cafe, hotel, bakery, central kitchen,
            dan rumah tinggal.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          <div className="rounded-2xl bg-zinc-900 p-8 border border-zinc-800">
            <h3 className="mb-5 text-2xl font-bold text-white">
              Siapa Kami
            </h3>

            <p className="leading-8 text-gray-300">
              Ratu Horeca Kitchen adalah perusahaan yang bergerak
              di bidang General Contractor Kitchen, Kitchen
              Equipment Supply, dan Stainless Fabrication.
              Kami menyediakan layanan terintegrasi mulai dari
              konsultasi, desain, fabrikasi, pengadaan peralatan,
              instalasi hingga after sales support.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-8 border border-zinc-800">
            <h3 className="mb-5 text-2xl font-bold text-white">
              Visi Kami
            </h3>

            <p className="leading-8 text-gray-300">
              Menjadi mitra terpercaya dalam penyediaan solusi
              kitchen profesional yang berkualitas, inovatif,
              dan berkelanjutan di Indonesia.
            </p>
          </div>

        </div>

        <div className="mt-16">
          <h3 className="mb-10 text-center text-3xl font-bold text-white">
            Kenapa Memilih Kami
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <h4 className="mb-3 text-xl font-semibold text-yellow-500">
                  {item.title}
                </h4>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}