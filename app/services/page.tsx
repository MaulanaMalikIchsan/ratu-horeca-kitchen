import Image from "next/image";
import Navbar from "../../components/navbar";
import { whatsappLink } from "../../lib/constants";
import {
  UtensilsCrossed,
  Coffee,
  Hotel,
  Croissant,
  CookingPot,
  ChefHat,
  House,
  Building2,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: "📐",
      title: "Kitchen Design",
      desc: "Perencanaan layout kitchen yang efisien, ergonomis, dan sesuai alur operasional bisnis.",
      image: "/workshop/workshop-production.png",
    },
    {
      icon: "🏗️",
      title: "Kitchen Contractor",
      desc: "Pengerjaan proyek kitchen mulai dari renovasi, pembangunan, instalasi, hingga serah terima.",
      image: "/workshop/workshop-installation.png",
    },
    {
      icon: "🍳",
      title: "Kitchen Equipment Supply",
      desc: "Penyediaan equipment kitchen profesional untuk restoran, cafe, hotel, bakery, dan cloud kitchen.",
      image: "/services/services-equipment.png",
    },
    {
      icon: "🔨",
      title: "Stainless Fabrication",
      desc: "Pembuatan custom stainless seperti meja kerja, sink, rack, hood, dan equipment sesuai kebutuhan.",
      image: "/workshop/workshop-welding.png",
    },
    {
      icon: "🔧",
      title: "Installation & Commissioning",
      desc: "Instalasi equipment, testing fungsi, dan memastikan kitchen siap digunakan secara optimal.",
      image: "/workshop/workshop-installation-2.png",
    },
    {
      icon: "🛡️",
      title: "Maintenance & After Sales",
      desc: "Layanan perawatan, perbaikan, dan dukungan teknis untuk menjaga performa kitchen Anda.",
      image: "/workshop/workshop-building.png",
    },
  ];

  const industries = [
  {
    name: "Restaurant",
    icon: UtensilsCrossed,
    image: "/industries/restaurant.png",
  },
  {
    name: "Cafe",
    icon: Coffee,
    image: "/industries/cafe.png",
  },
  {
    name: "Hotel",
    icon: Hotel,
    image: "/industries/hotel.png",
  },
  {
    name: "Bakery",
    icon: Croissant,
    image: "/industries/bakery.png",
  },
  {
    name: "Cloud Kitchen",
    icon: CookingPot,
    image: "/industries/cloud-kitchen.png",
  },
  {
    name: "Catering",
    icon: ChefHat,
    image: "/industries/catering.png",
  },
  {
    name: "Rumah Tinggal",
    icon: House,
    image: "/industries/rumah-tinggal.png",
  },
  {
    name: "Villa & Apartemen",
    icon: Building2,
    image: "/industries/villa-apartement.png",
  },
];

  const process = [
    ["01", "Konsultasi"],
    ["02", "Survey Lokasi"],
    ["03", "Design & Penawaran"],
    ["04", "Produksi / Pengadaan"],
    ["05", "Instalasi"],
    ["06", "Serah Terima"],
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black pt-8 text-white">

        {/* SERVICES */}
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">

              <h2 className="text-4xl font-bold">
                Layanan Utama Ratu Horeca Kitchen
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-gray-400">
                Kami membantu pelanggan mendapatkan solusi kitchen yang tepat,
                fungsional, dan siap digunakan untuk kebutuhan operasional.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-yellow-500/25 bg-zinc-950 transition hover:-translate-y-1 hover:border-yellow-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                  </div>

                  <div className="p-8">
                    <div className="mb-5 text-5xl">{item.icon}</div>

                    <h3 className="mb-4 text-2xl font-bold text-yellow-500">
                      {item.title}
                    </h3>

                    <p className="leading-7 text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold">
                Industri yang Kami Layani
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {industries.map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.name}
      className="group relative h-64 overflow-hidden rounded-2xl border border-yellow-500/20 transition hover:border-yellow-500"
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex items-end p-6">
        <div>
          <Icon className="mb-4 h-11 w-11 text-yellow-500" />

          <h3 className="text-2xl font-bold text-white">
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );
})}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-zinc-950 to-black p-10 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">
                  Butuh Solusi Kitchen Profesional?
                </h2>

                <p className="mt-4 text-gray-400">
                  Konsultasikan kebutuhan kitchen Anda bersama tim Ratu Horeca
                  Kitchen.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
                >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}