import Navbar from "../../components/navbar";
import Image from "next/image";
import ConsultationButton from "../../components/consultation-button";
import {
  Building2,
  Hammer,
  ChefHat,
  Factory,
  Users,
  ShieldCheck,
  Settings,
  Wrench,
  MessageSquare,
  MapPinned,
  PencilRuler,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
    const advantages = [
  {
    icon: Building2,
    title: "General Contractor",
    desc: "Mengelola proyek kitchen dari awal hingga selesai secara profesional.",
  },
  {
    icon: Hammer,
    title: "Stainless Fabrication",
    desc: "Produksi custom stainless sesuai kebutuhan dengan kualitas terbaik.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Equipment Supply",
    desc: "Menyediakan berbagai peralatan kitchen dari brand terpercaya.",
  },
  {
    icon: Factory,
    title: "Workshop Sendiri",
    desc: "Kontrol kualitas lebih baik dan pengerjaan lebih cepat.",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    desc: "Didukung oleh tim berpengalaman dan berkomitmen tinggi.",
  },
  {
    icon: ShieldCheck,
    title: "After Sales Support",
    desc: "Layanan purna jual yang responsif dan terpercaya.",
  },
];

  const process = [
  {
    icon: MessageSquare,
    title: "Konsultasi",
  },
  {
    icon: MapPinned,
    title: "Survey Lokasi",
  },
  {
    icon: PencilRuler,
    title: "Design & Layout",
  },
  {
    icon: Factory,
    title: "Produksi / Pengadaan",
  },
  {
    icon: Wrench,
    title: "Instalasi",
  },
  {
    icon: Handshake,
    title: "Serah Terima",
  },
];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        {/* SIAPA KAMI */}
<section className="pt-36 pb-20">
  <div className="mx-auto max-w-5xl px-6">

    <h2 className="mb-8 text-center text-4xl font-bold">
      Siapa Kami
    </h2>

    <div className="rounded-2xl border border-yellow-500/30 bg-zinc-950 p-8 shadow-xl">

      <div className="relative mx-auto mb-10 h-[420px] max-w-4xl overflow-hidden rounded-xl">
        <Image
          src="/workshop/workshop-building.png"
          alt="Workshop Ratu Horeca Kitchen"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">

        <p className="text-lg leading-9 text-gray-300">
          Ratu Horeca Kitchen merupakan perusahaan yang bergerak di bidang
          <span className="font-semibold text-white">
            {" "}General Contractor Kitchen, Kitchen Equipment Supply,
            dan Stainless Fabrication.
          </span>
        </p>

        <p className="mt-6 text-lg leading-9 text-gray-300">
          Kami menyediakan layanan terintegrasi mulai dari konsultasi,
          desain, fabrikasi, pengadaan peralatan, instalasi hingga after
          sales support untuk kebutuhan bisnis maupun rumah tinggal.
        </p>

      </div>

    </div>

  </div>
</section>

        {/* VISI MISI */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Visi & Misi
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-yellow-500/30 bg-zinc-950 p-10">
                <h3 className="mb-6 text-3xl font-bold text-yellow-500">
                  Visi
                </h3>

                <p className="leading-8 text-gray-300">
                  Menjadi mitra terpercaya dalam penyediaan solusi kitchen
                  profesional yang berkualitas, inovatif, dan berkelanjutan di
                  Indonesia.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-500/30 bg-zinc-950 p-10">
                <h3 className="mb-6 text-3xl font-bold text-yellow-500">
                  Misi
                </h3>

                <ul className="space-y-4 text-gray-300">
                  <li>✓ Menyediakan solusi kitchen yang fungsional dan efisien.</li>
                  <li>✓ Mengutamakan kualitas material dan pengerjaan.</li>
                  <li>✓ Menyediakan layanan terintegrasi dari desain hingga instalasi.</li>
                  <li>✓ Memberikan layanan after sales yang responsif.</li>
                  <li>✓ Menghadirkan solusi kitchen yang modern dan berdaya saing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WORKSHOP */}
<section className="py-8">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-500">
        Workshop & Fabrication
      </p>

      <h2 className="text-4xl font-bold text-white">
        Workshop Kami
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
        Didukung fasilitas workshop dan tim berpengalaman untuk
        proses fabrikasi, produksi stainless, instalasi, dan
        pengerjaan proyek kitchen profesional.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">

      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/workshop/workshop-building.png"
          alt="Workshop Building"
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/workshop/workshop-production.png"
          alt="Workshop Production"
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/workshop/workshop-welding.png"
          alt="Workshop Welding"
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/workshop/workshop-installation.png"
          alt="Workshop Installation"
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

    </div>

  </div>

<div className="mt-12 grid gap-6 md:grid-cols-4">

  <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-6 text-center">
    <Building2 className="mx-auto mb-4 h-10 w-10 text-yellow-500" />
    <h3 className="mb-2 font-semibold text-white">
      Workshop Sendiri
    </h3>
    <p className="text-sm text-gray-400">
      Fasilitas workshop untuk mendukung proses fabrikasi dan produksi.
    </p>
  </div>

  <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-6 text-center">
    <Settings className="mx-auto mb-4 h-10 w-10 text-yellow-500" />
    <h3 className="mb-2 font-semibold text-white">
      Produksi Presisi
    </h3>
    <p className="text-sm text-gray-400">
      Didukung tenaga ahli dan peralatan yang memadai.
    </p>
  </div>

  <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-6 text-center">
    <Wrench className="mx-auto mb-4 h-10 w-10 text-yellow-500" />
    <h3 className="mb-2 font-semibold text-white">
      Instalasi Profesional
    </h3>
    <p className="text-sm text-gray-400">
      Pemasangan dilakukan oleh tim berpengalaman.
    </p>
  </div>

  <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-6 text-center">
    <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-yellow-500" />
    <h3 className="mb-2 font-semibold text-white">
      After Sales Support
    </h3>
    <p className="text-sm text-gray-400">
      Dukungan purna jual untuk menjaga performa kitchen Anda.
    </p>
  </div>

</div>

</section>

        {/* KENAPA MEMILIH KAMI */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Kenapa Memilih Kami
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {advantages.map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.title}
      className="rounded-2xl border border-yellow-500/25 bg-zinc-950 p-8 text-center transition hover:border-yellow-500"
    >
      <Icon className="mx-auto mb-4 h-12 w-12 text-yellow-500" />

      <h3 className="mb-4 text-xl font-bold text-yellow-500">
        {item.title}
      </h3>

      <p className="leading-7 text-gray-400">
        {item.desc}
      </p>
    </div>
  );
})}
            </div>
          </div>
          
        </section>

        {/* ALUR KERJA */}
        <section className="bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Alur Kerja Proyek
            </h2>

            <div className="grid gap-6 md:grid-cols-6">
              {process.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={item.title}
      className="rounded-2xl border border-yellow-500/25 bg-black p-6 text-center"
    >
      <Icon className="mx-auto mb-4 h-10 w-10 text-yellow-500" />

      <p className="mb-3 text-2xl font-bold text-yellow-500">
        {String(index + 1).padStart(2, "0")}
      </p>

      <p className="text-sm font-semibold text-white">
        {item.title}
      </p>
    </div>
  );
})}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-zinc-950 to-black p-10 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">
                  Butuh Solusi Kitchen Profesional?
                </h2>

                <p className="mt-4 text-gray-400">
                  Konsultasikan kebutuhan Anda bersama tim Ratu Horeca Kitchen.
                </p>
              </div>

              <ConsultationButton
                className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}