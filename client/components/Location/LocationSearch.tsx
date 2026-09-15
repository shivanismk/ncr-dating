"use client";

export default function LocationSearch() {
  return (
    <div className="mx-auto -mt-10 max-w-5xl rounded-2xl bg-white p-6 shadow-xl">

      <input
        type="text"
        placeholder="Search State..."
        className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}