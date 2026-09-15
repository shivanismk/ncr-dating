"use client";

import { useEffect, useState } from "react";
import {
  getProfiles,
  deleteProfile,
} from "@/services/profile.service";

type Profile = {
  id: number;
  name: string;
  state: string;
  city: string;
  category: string;
  phone: string;
  whatsapp: string;
  image?: string;
  status: boolean;
};

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    loadProfiles();
  }, []);

  async function loadProfiles() {
    try {
      const data = await getProfiles();
      setProfiles(data.data || data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this profile?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProfile(id);

      setProfiles((prev) =>
        prev.filter((profile) => profile.id !== id)
      );

      alert("✅ Profile deleted successfully");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to delete profile");
    }
  }

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        All Profiles
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="rounded-xl border bg-white p-5 shadow"
          >
            {profile.image && (
              <img
                src={profile.image}
                alt={profile.name}
                className="mb-4 h-52 w-full rounded-lg object-cover"
              />
            )}

            <h2 className="text-xl font-bold">
              {profile.name}
            </h2>

            <p>
              <strong>State:</strong> {profile.state}
            </p>

            <p>
              <strong>City:</strong> {profile.city}
            </p>

            <p>
              <strong>Category:</strong> {profile.category}
            </p>

            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {profile.status ? "Active" : "Inactive"}
            </p>

            <button
              onClick={() => handleDelete(profile.id)}
              className="mt-5 w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              🗑 Delete Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}