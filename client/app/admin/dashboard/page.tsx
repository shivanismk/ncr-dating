"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/admin/DashboardLayout";
import DashboardCard from "@/components/admin/DashboardCard";

import { getDashboardStats } from "@/services/dashboard.service";

export default function DashboardPage() {
  const [totalProfiles, setTotalProfiles] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getDashboardStats();
      setTotalProfiles(data.totalProfiles);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="Total Profiles"
          value={totalProfiles}
        />

      </div>
    </DashboardLayout>
  );
}


