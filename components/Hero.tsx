"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* background gradients */}
      <div className="absolute top-10 left-10 h-72 w-72 bg-pink-400 opacity-20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-blue-400 opacity-20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Design That Feels <span className="text-pink-500">Premium</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-80 max-w-xl mx-auto">
          Custom digital artwork crafted with intention, detail, and a unique
          visual identity.
        </p>

        <Link
          href="/commission"
          className="mt-8 inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-neutral-900 transition"
        >
          Place Commission Now
        </Link>
      </motion.div>
    </section>
  );
}
