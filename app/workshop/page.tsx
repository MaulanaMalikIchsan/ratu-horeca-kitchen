import Navbar from "../../components/navbar";
import Image from "next/image";
import { whatsappLink } from "../../lib/constants";
import {
  Factory,
  Hammer,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function WorkshopPage() {
  const gallery = [
    {
      title: "Workshop Building",
      image: "/workshop/workshop-building.png",
    },
    {
      title: "Stainless Fabrication",
      image: "/workshop/stainless-fabrication.png",
    },
    {
      title: "Welding Process",
      image: "/workshop/welding-process.png",
    },
    {
      title: "Assembly & Installation",
      image: "/workshop/assembly installation.png",
    },
  ];

  const capabilities = [
    {
      icon: Factory,
      title: "Workshop Sendiri",
      desc: "Didukung fasilitas produksi internal untuk menjaga kualitas dan ketepatan waktu pengerjaan.",
    },
    {
      icon: Hammer,
      title: "Stainless Fabrication",
      desc: "Produksi berbagai kebutuhan stainless kitchen secara custom sesuai kebutuhan proyek.",
    },
    {
      icon: Wrench,
      title: "Installation Support",
      desc: "Didukung tim instalasi berpengalaman untuk memastikan produk siap digunakan.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      desc: "Setiap produk melalui proses pengecekan sebelum dikirim ke lokasi pelanggan.",
    },
  ];

  const workflow = [
    "Konsultasi",
    "Design",
    "Fabrication",
    "Quality Check",
    "Installation",
    "Serah Terima",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-28">

        {/* HERO */}
        <section className="relative h-[500px] overflow-hidden">

          <Image
            src="/workshop/workshop-building.png"
            alt="Workshop"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl px-6 text-center">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-500">
                Workshop
              </p>

              <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
                Workshop & Produksi
              </h1>

              <p className="text-xl leading-9 text-gray-300">
                Fasilitas produksi dan fabrikasi untuk mendukung
                setiap proyek kitchen profesional dengan standar
                kualitas terbaik.
              </p>

            </div>
          </div>

        </section>

        {/* ABOUT WORKSHOP */}
        <section className="px-6 py-24">

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

            <div>
              <h2 className="mb-8 text-4xl font-bold">
                Workshop Kami
              </h2>

              <p className="leading-9 text-gray-400">
                Ratu Horeca Kitchen memiliki workshop sendiri yang
                mendukung proses fabrikasi stainless, perakitan,
                pengelasan, finishing hingga instalasi.
              </p>

              <p className="mt-6 leading-9 text-gray-400">
                Dengan fasilitas produksi internal, kami dapat
                menjaga kualitas produk, ketepatan waktu pengerjaan,
                dan fleksibilitas untuk memenuhi kebutuhan proyek
                custom pelanggan.
              </p>
            </div>

            <div className="relative h-[350px] overflow-hidden rounded-2xl">
              <Image
                src="/workshop/workshop-building.png"
                alt="Workshop Building"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </section>

        {/* GALLERY */}
        <section className="px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <h2 className="mb-16 text-center text-4xl font-bold">
              Aktivitas Workshop
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              {gallery.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-950"
                >
                  <div className="relative h-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CAPABILITIES */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <h2 className="mb-16 text-center text-4xl font-bold">
              Kapabilitas Workshop
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8"
                  >
                    <Icon className="mb-5 h-10 w-10 text-yellow-500" />

                    <h3 className="mb-4 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* WORKFLOW */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <h2 className="mb-16 text-center text-4xl font-bold">
              Alur Produksi
            </h2>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">

              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-6 text-center"
                >
                  <p className="mb-4 text-3xl font-bold text-yellow-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="font-semibold">
                    {step}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-500/20 bg-zinc-950 p-12 text-center">

            <h2 className="mb-6 text-4xl font-bold">
              Kunjungi Workshop Kami
            </h2>

            <p className="mb-10 text-lg leading-8 text-gray-400">
              Diskusikan kebutuhan kitchen Anda bersama tim
              Ratu Horeca Kitchen dan dapatkan solusi terbaik
              sesuai kebutuhan bisnis Anda.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
              >
              Konsultasi Gratis
            </a>

          </div>

        </section>

      </main>
    </>
  );
}