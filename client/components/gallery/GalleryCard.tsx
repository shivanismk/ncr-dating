import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

export default function GalleryCard({
  title,
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-64">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 33vw"
          className="object-cover"
        />

      </div>

      <div className="p-4">
        <h3 className="font-semibold">
          {title}
        </h3>
      </div>

    </div>
  );
}