const popularStates = [
  "Uttar Pradesh",
  "Delhi",
  "Maharashtra",
  "Rajasthan",
  "Punjab",
  "Gujarat",
];

export default function PopularStates() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">

      <h2 className="mb-6 text-2xl font-bold">
        Popular States
      </h2>

      <div className="flex flex-wrap gap-3">
        {popularStates.map((state) => (
          <button
            key={state}
            className="rounded-full border px-5 py-2 hover:bg-blue-600 hover:text-white transition"
          >
            {state}
          </button>
        ))}
      </div>

    </section>
  );
}