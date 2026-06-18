"use client";

import { useState } from "react";
import Navbar from "../../components/navbar";
import ConsultationButton from "../../components/consultation-button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {

  const [nama, setNama] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [nomor, setNomor] = useState("");
  const [kebutuhan, setKebutuhan] = useState("");
  const contacts = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 812 3456 7890",
    },
    {
      icon: Mail,
      title: "Email",
      value: "sales@ratuhorecakitchen.com",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Bogor, Jawa Barat",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Sabtu | 08.00 - 17.00",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black pt-28 text-white">

        {/* HERO */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">

            <h1 className="mb-8 text-5xl font-bold lg:text-7xl">
              Hubungi Kami
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-9 text-gray-400">
              Tim Ratu Horeca Kitchen siap membantu kebutuhan kitchen
              profesional Anda mulai dari konsultasi, desain,
              fabrikasi hingga instalasi.
            </p>

          </div>
        </section>

        {/* INFO KONTAK */}
        <section className="px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8 text-center"
                  >
                    <Icon className="mx-auto mb-5 h-10 w-10 text-yellow-500" />

                    <h3 className="mb-3 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">
                      {item.value}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* FORM KONSULTASI */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <div className="grid gap-10 lg:grid-cols-2">

              {/* FORM */}
              <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8">

                <h2 className="mb-8 text-3xl font-bold">
                  Form Konsultasi
                </h2>

                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  />

                  <input
                    type="text"
                    placeholder="Nama Perusahaan"
                    value={perusahaan}
                    onChange={(e) => setPerusahaan(e.target.value)}
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  />

                  <input
                    type="text"
                    placeholder="Nomor WhatsApp"
                    value={nomor}
                    onChange={(e) => setNomor(e.target.value)}
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  />

                  <textarea
                    rows={6}
                    placeholder="Jelaskan kebutuhan kitchen Anda..."
                    value={kebutuhan}
                    onChange={(e) => setKebutuhan(e.target.value)}
                    className="w-full rounded-xl border border-zinc-700 bg-black p-4"
                  />

                  <button
                    onClick={() => {
                      const pesan = `Halo Ratu Horeca Kitchen

                  Nama: ${nama}
                  Perusahaan: ${perusahaan}
                  Nomor WhatsApp: ${nomor}

                  Kebutuhan:
                  ${kebutuhan}`;

                      const url = `https://wa.me/6285720403450?text=${encodeURIComponent(
                        pesan
                      )}`;

                      window.open(url, "_blank");
                    }}
                    className="w-full rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black hover:bg-yellow-400"
                  >
                    Kirim Konsultasi
                  </button>

                </div>

              </div>

              {/* MAP */}
              <div className="flex min-h-[500px] items-center justify-center rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8">

                <div className="text-center">

                  <MapPin
                    size={60}
                    className="mx-auto mb-6 text-yellow-500"
                  />

                  <h3 className="mb-4 text-2xl font-bold">
                    Lokasi Workshop
                  </h3>

                  <p className="text-gray-400">
                    Google Maps akan ditampilkan di sini.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-500/20 bg-zinc-950 p-12 text-center">

            <MessageCircle
              size={60}
              className="mx-auto mb-6 text-yellow-500"
            />

            <h2 className="mb-6 text-4xl font-bold">
              Butuh Konsultasi Cepat?
            </h2>

            <p className="mb-10 text-lg leading-8 text-gray-400">
              Hubungi tim kami melalui WhatsApp dan dapatkan solusi
              terbaik untuk kebutuhan kitchen profesional Anda.
            </p>

            <ConsultationButton
              label="Chat WhatsApp"
              className="w-full rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black hover:bg-yellow-400"
            />

          </div>

        </section>

      </main>
    </>
  );
}