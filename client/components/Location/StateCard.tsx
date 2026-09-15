import Image from "next/image";

type Props = {
  name: string;
  image: string;
  cities: number;
};

export default function StateCard({
  name,
  image,
  cities,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-56">

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {name}
        </h3>

        <p className="mt-2 text-gray-500">
          {cities} Cities
        </p>

      </div>

    </div>
  );
}