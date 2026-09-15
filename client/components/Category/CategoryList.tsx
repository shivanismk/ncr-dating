import { getCategories } from "@/services/category.service";

export default async function CategoryList() {

  const categories =
    await getCategories();

  return (

    <table className="w-full">

      <thead>

        <tr>

          <th className="border p-3">
            Name
          </th>

          <th className="border p-3">
            Slug
          </th>

        </tr>

      </thead>

      <tbody>

        {categories.map((c: any) => (

          <tr key={c.id}>

            <td className="border p-3">
              {c.name}
            </td>

            <td className="border p-3">
              {c.slug}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}