import Navbar from "../../components/navbar";
import Image from "next/image";
import { whatsappLink } from "../../lib/constants";
import ConsultationButton from "../../components/consultation-button";
import {
  Hammer,
  Flame,
  Snowflake,
  Settings,
  ShieldCheck,
  Wrench,
  Factory,
  Headphones,
} from "lucide-react";

export default function ProductsPage() {
  const categories = [
    {
      title: "Stainless Fabrication",
      icon: Hammer,
      image: "/products/stainless-fabrication.png",
      desc: "Custom stainless table, sink, rack, cabinet dan berbagai kebutuhan stainless kitchen profesional.",
    },
    {
      title: "Cooking Equipment",
      icon: Flame,
      image: "/products/cooking-equipment.png",
      desc: "Kompor, oven, fryer, griddle dan berbagai peralatan memasak untuk operasional dapur profesional.",
    },
    {
      title: "Refrigeration",
      icon: Snowflake,
      image: "/products/refrigeration.png",
      desc: "Chiller, freezer dan showcase untuk menjaga kualitas bahan baku dan produk.",
    },
    {
      title: "Preparation Equipment",
      icon: Settings,
      image: "/products/preparation-equipment.png",
      desc: "Mixer, slicer, food processor dan peralatan persiapan makanan lainnya.",
    },
  ];

  const advantages = [
    {
      icon: ShieldCheck,
      title: "Material Berkualitas",
    },
    {
      icon: Wrench,
      title: "Custom Sesuai Kebutuhan",
    },
    {
      icon: Factory,
      title: "Workshop Sendiri",
    },
    {
      icon: Headphones,
      title: "After Sales Support",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black pt-28 text-white">

        {/* HERO */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl text-center">

            <h1 className="mb-8 text-5xl font-bold lg:text-7xl">
              Produk & Equipment
              <br />
              Kitchen Profesional
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-9 text-gray-400">
              Ratu Horeca Kitchen menyediakan berbagai kebutuhan kitchen
              equipment profesional mulai dari stainless fabrication,
              cooking equipment, refrigeration hingga preparation equipment.
            </p>
          </div>
        </section>

        {/* KATEGORI */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <h2 className="mb-16 text-center text-4xl font-bold">
              Kategori Produk
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              {categories.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-950 transition hover:border-yellow-500"
                  >
                    <div className="relative h-72">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-8">
                      <Icon className="mb-4 h-10 w-10 text-yellow-500" />

                      <h3 className="mb-4 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="leading-8 text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <h2 className="mb-16 text-center text-4xl font-bold">
              Kenapa Produk Kami?
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8 text-center"
                  >
                    <Icon className="mx-auto mb-5 h-10 w-10 text-yellow-500" />

                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-500/20 bg-zinc-950 p-12 text-center">

            <h2 className="mb-6 text-4xl font-bold">
              Tidak Menemukan Produk Yang Dicari?
            </h2>

            <p className="mb-10 text-lg leading-8 text-gray-400">
              Kami juga melayani kebutuhan custom sesuai spesifikasi
              proyek dan kebutuhan operasional bisnis Anda.
            </p>

            <ConsultationButton
              className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
            />

          </div>
        </section>

      </main>
    </>
  );
}