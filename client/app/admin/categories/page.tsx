import DashboardLayout from "@/components/admin/DashboardLayout";

import CategoryForm from "@/components/Category/CategoryForm";

import CategoryList from "@/components/Category/CategoryList";

export default function CategoriesPage() {

  return (

    <DashboardLayout>

      <div className="rounded-xl bg-white p-8 shadow">

        <h1 className="mb-8 text-3xl font-bold">

          Categories

        </h1>

        <CategoryForm />

        <CategoryList />

      </div>

    </DashboardLayout>

  );

}