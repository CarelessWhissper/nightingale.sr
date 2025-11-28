"use client"
import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/navigation";

const CommissionWizard = dynamic(
  () => import("@/components/commission/CommissionWizard"),
  { ssr: false }
);

export default function CommissionPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto py-24 px-6">
        {/* Back Button */}
        <button
          className="mb-8 px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
          onClick={() => router.push("/")}
        >
          ← Back to Home
        </button>

        <CommissionWizard />
      </section>
    </main>
  );
}
