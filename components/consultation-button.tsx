"use client";

import { useState } from "react";
import { X, UserRound } from "lucide-react";
import { salesContacts } from "../lib/sales";


export default function ConsultationButton({
  label = "Konsultasi Gratis",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const message =
    "Halo Ratu Horeca Kitchen, saya ingin konsultasi mengenai kebutuhan kitchen.";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ||
          "rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
        }
      >
        {label}
      </button>

      {open && (
        <div className="fixed left-0 top-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black/80 p-4"
        onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-yellow-500/30 bg-zinc-950 p-6 text-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Pilih Sales</h2>
                <p className="mt-1 text-sm text-gray-400">
                  Silakan pilih sales yang ingin dihubungi.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-zinc-700 p-2 hover:border-yellow-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {salesContacts.map((sales) => (
                <a
                  key={sales.phone}
                  onClick={() => setOpen(false)}
                  href={`https://wa.me/${sales.phone}?text=${encodeURIComponent(
                    message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-yellow-500/20 bg-black p-4 transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <UserRound size={28} />

                  <div>
                    <p className="font-semibold">{sales.name}</p>
                    <p className="text-sm opacity-80">Chat via WhatsApp</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}