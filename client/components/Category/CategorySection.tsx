import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {

return(

<section className="bg-gray-50 py-20">

<div className="mx-auto max-w-7xl px-6">

<div className="mb-12 text-center">

<h2 className="text-4xl font-bold">

Popular Category

</h2>

<p className="mt-3 text-gray-500">

Browse businesses by category

</p>

</div>

<div
className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
>

{

categories.map(category=>(

<CategoryCard

key={category.id}

category={category}

/>

))

}

</div>

</div>

</section>

)

}