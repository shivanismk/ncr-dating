import Image from "next/image";
import Link from "next/link";

interface LocationProps {
  location: {
    id: number;
    name: string;
    image: string;
    listings: number;
  };
}

export default function LocationCard({ location }: LocationProps) {
  return (
    <Link
      href={`/profiles?city=${encodeURIComponent(location.name)}&page=1`}
    >
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative h-72">

          <Image
            src={location.image}
            alt={location.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute bottom-5 left-5 text-white">

            <h3 className="text-2xl font-bold">
              {location.name}
            </h3>

            <p className="mt-1 text-sm">
              {location.listings} Listings
            </p>

            <div className="mt-3 inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold transition group-hover:bg-red-700">
              Explore →
            </div>

          </div>

        </div>

      </div>
    </Link>
  );
}

