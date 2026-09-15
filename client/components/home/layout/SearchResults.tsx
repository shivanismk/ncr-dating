"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { searchProfiles } from "@/services/profile.service";

type Profile = {
  id: number;
  name: string;
  category: string;
  state: string;
  city: string;
  phone: string;
  whatsapp: string;
  description?: string;
  image?: string;
};

export default function SearchResults() {
  const params = useSearchParams();

  const category = params.get("category") || "";
  const state = params.get("state") || "";
  const city = params.get("city") || "";

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setPage(1);
  }, [category, state, city]);

  useEffect(() => {
    async function loadProfiles() {
      if (!category && !state && !city) {
        setProfiles([]);
        return;
      }

      try {
        setLoading(true);

        const data = await searchProfiles(
          category,
          state,
          city,
          page,
          10
        );

        setProfiles(data.profiles);

        setTotalPages(data.totalPages);

        setTotal(data.total);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfiles();
  }, [category, state, city, page]);

  if (!category && !state && !city) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Search Results 
          </h2>

          <p className="mt-2 text-gray-500">
            Total Profiles : {total}
          </p>

        </div>

      </div>

      {loading && (
        <div className="py-20 text-center">
          Loading...
        </div>
      )}

      {!loading && profiles.length === 0 && (
        <div className="rounded-xl bg-white p-10 text-center shadow">
          No Profiles Found
        </div>
      )}

      <div className="space-y-6">

        {profiles.map((profile) => (

          <div
            key={profile.id}
            className="flex flex-col overflow-hidden rounded-xl bg-white shadow transition hover:shadow-xl md:flex-row"
          >

            <div className="md:w-72">

              <img
                src={
                  profile.image ||
                  "https://placehold.co/500x500?text=No+Image"
                }
                alt={profile.name}
                className="h-64 w-full object-cover"
              />

            </div>

            <div className="flex flex-1 flex-col justify-between p-6">

              <div>

                <h3 className="text-2xl font-bold">
                  {profile.name}
                </h3>

                <div className="mt-3 space-y-2">

                  <p>

                    <strong>Category :</strong>{" "}

                    {profile.category}

                  </p>

                  <p>

                    <strong>State :</strong>{" "}

                    {profile.state}

                  </p>

                  <p>

                    <strong>City :</strong>{" "}

                    {profile.city}

                  </p>

                  <p className="line-clamp-3 text-gray-600">

                    {profile.description}

                  </p>

                </div>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                <a
                  href={`tel:${profile.phone}`}
                  className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white"
                >
                  📞 Call
                </a>

                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white"
                >
                  WhatsApp
                </a>

                <Link
                  href={`/profiles/${profile.id}`}
                  className="rounded-lg border px-5 py-2 font-semibold"
                >
                  View More
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

      {!loading && totalPages > 1 && (

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded-lg border px-4 py-2 disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, i) => i + 1
          ).map((num) => (

            <button
              key={num}
              onClick={() => setPage(num)}
              className={`rounded-lg px-4 py-2 ${
                page === num
                  ? "bg-red-600 text-white"
                  : "border"
              }`}
            >
              {num}
            </button>

          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded-lg border px-4 py-2 disabled:opacity-50"
          >
            Next
          </button>

        </div>

      )}

    </section>
  );
}
