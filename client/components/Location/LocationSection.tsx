"use client";

import { useEffect, useState } from "react";

import LocationCard from "./LocationCard";
import { getPopularLocations } from "@/services/profile.service";

type Location = {
  city: string;
  listings: number;
  image: string;
};

export default function LocationSection() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocations() {
      try {
        const data = await getPopularLocations();
        setLocations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadLocations();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          Loading Popular Locations...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          {/* <p className="mt-3 text-gray-500">
    hello
   </p> */}

          <p className="text-center text-base leading-relaxed text-gray-90 mb-10">
            We are also a directory full committed to providing high-class <span className="font-bold text-red-600">independent housewife</span> in Delhi Ncr for demanding Gentleman.
            <span>We are leading most famous escorts agency in Delhi. </span>
            <span> Whether you want a charming date or a high-class companion, we guarantee </span>
            <span className="font-bold text-red-600">100% privacy, real profiles, and premium service</span>.
            <span> Don't wait—connect with us now to book your perfect match today!</span>
          </p>

          <h2 className="text-4xl font-bold">
            Popular Locations
          </h2>

          <p className="mt-3 text-gray-500">
            Explore call girls by city
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {locations.map((location, index) => (

            <LocationCard
              key={index}

              location={{
                id: index,
                name: location.city,
                listings: location.listings,
                image: location.image
              }}

            />

          ))}

        </div>

        <div className="mb-12 mx-auto my-16 text-center">
          {/* <div className="max-w-6xl mx-auto my-8 px-4 text-center"> */}
          <p className="text-sm md:text-base text-gray-900 leading-relaxed ">
            We understand that desire is a spectrum—sometimes you want a soft, romantic touch, and other times you want to explore the kinky depths of BDSM or FEMDOM. At Seeker Pleasure Delhi, you will find different types of escort girls that satisfy your needs such as: On our platform, you will encounter: Elite Independent Companions: Stunning Delhi escort girls who manage their own time and specialize in personalized pleasure.
            The Exotic: From blonde Russian escorts to elegant call girls, experience a world of beauty right here in the city.

            Visual Perfections: Browse profiles of hot single model girls, escorts, and erotic escorts with curves that demand to be touched.

            Diverse Personalities: Whether you’re drawn to the sophisticated charm of Delhi VIP escort girls or the experienced, sultry nature of MILF women, your perfect match is waiting.

          </p>
        </div>

      </div>

    </section>
  );
}