
import StateHero from "@/components/Location/StateHero";
import LocationSearch from "@/components/Location/LocationSearch";
import PopularStates from "@/components/Location/PopularStates";
import StateCard from "@/components/Location/StateCard";

import { states } from "@/data/states";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-zinc-900">

      {/* Hero */}
      <StateHero />

      {/* Search */}
      <LocationSearch />

      {/* Popular States */}
      <PopularStates />

      {/* All States */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="mb-8 text-3xl font-bold">
          Browse All States
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {states.map((state) => (
            <StateCard
              key={state.id}
              name={state.name}
              image={state.image}
              cities={state.cities}
            />
          ))}

        </div>

      </section>

    </main>
  );
}
