import Image from "next/image";

export default function CategoryCard({ category }: any) {

    const Icon = category.icon;

    return (

<div
className="group overflow-hidden rounded-2xl bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
>

<div className="relative h-48">

<Image
src={category.image}
alt={category.name}
fill
className="object-cover transition duration-500 group-hover:scale-110"
/>

</div>

<div className="p-5">

<div className="flex items-center gap-3">

<div
className="rounded-xl bg-blue-100 p-3 text-blue-600"
>

<Icon size={24}/>

</div>

<div>

<h3
className="font-bold text-lg"
>

{category.name}

</h3>

<p
className="text-sm text-gray-500"
>

{category.listings} Listings

</p>

</div>

</div>

</div>

</div>

    )

}