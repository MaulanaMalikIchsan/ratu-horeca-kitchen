const stats = [
  {
    value: "20+",
    label: "Project Selesai",
  },
  {
    value: "100+",
    label: "Klien Puas",
  },
  {
    value: "11+",
    label: "Tahun Pengalaman",
  },
  {
    value: "After Sales",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-2 border-t border-white/10 px-6 py-8 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="border-white/10 px-6 py-4 md:border-r last:border-r-0"
          >
            <h3 className="text-4xl font-extrabold text-yellow-500">
              {item.value}
            </h3>

            <p className="mt-2 text-lg text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}