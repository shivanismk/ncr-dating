import DashboardLayout from "@/components/admin/DashboardLayout";
import ProfileForm from "@/components/admin/profile/ProfileForm";
export default function AddProfilePage() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-8 text-3xl font-bold">
          Add New Profile
        </h1>

        <ProfileForm />
      </div>
    </DashboardLayout>
  );
}

