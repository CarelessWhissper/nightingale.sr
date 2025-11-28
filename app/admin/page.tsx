"use client";

import DashboardStats from "@/components/admin/DashboardStats";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <DashboardStats />
    </main>
  );
}
