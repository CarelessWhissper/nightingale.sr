"use client";

import { useEffect, useState } from "react";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    fetch("https://YOURDOMAIN.com/api/admin/stats.php")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard label="Total Requests" value={stats.total} />
      <StatCard label="Pending" value={stats.pending} />
      <StatCard label="Completed" value={stats.completed} />
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-6 bg-white shadow rounded-2xl">
      <p className="text-gray-600">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
