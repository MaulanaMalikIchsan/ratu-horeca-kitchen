import { whatsappLink } from "../lib/constants";
import Link from "next/link";
import ConsultationButton from "./consultation-button";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
         backgroundImage:
        "url('/hero/kitchen-hero.png')",
        }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-xl font-semibold text-yellow-500">
            DESIGN • BUILD • SUPPLY
          </p>

          <h1 className="mb-6 text-6xl font-extrabold leading-tight text-white md:text-7xl">
            KITCHEN
            <br />
            <span className="text-yellow-500">PROFESIONAL</span>
          </h1>

          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-200">
            Solusi lengkap untuk kebutuhan kitchen restoran, cafe, hotel,
            bakery, central kitchen dan rumah tinggal.
          </p>

          <div className="flex flex-wrap gap-5">
            <ConsultationButton
              className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
            />

            <Link
              href="/portfolio"
              className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-white hover:bg-yellow-500 hover:text-black transition"
              >
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}