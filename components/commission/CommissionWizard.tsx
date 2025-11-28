
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Step1Basic from "./steps/Step1Basic";
import Step2Style from "./steps/Step2Style";
import Step3Contact from "./steps/Step3Contact";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { resetCommission } from "@/redux/slices/commissionSlice";

const steps = ["Basic", "Style", "Contact"];

export default function CommissionWizard() {
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const commission = useAppSelector((s) => s.commission);

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));
  const reset = () => dispatch(resetCommission());

  const progress = ((index + 1) / steps.length) * 100;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Start a Commission
        </h1>
        <p className="mt-2 text-sm opacity-80 max-w-lg">
          Bespoke digital artwork crafted with refined detail and expressive visuals.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between mt-3 text-xs opacity-70">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  i <= index ? "bg-black text-white" : "bg-neutral-100"
                }`}
              >
                {i + 1}
              </div>
              <div className={i === index ? "font-medium" : "opacity-70"}>
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Steps */}
      <div className="relative min-h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          >
            {index === 0 && <Step1Basic onNext={next} />}
            {index === 1 && <Step2Style onNext={next} onBack={back} />}
            {index === 2 && (
              <Step3Contact
                onBack={back}
                onSubmit={() => {
                  // Here we'd normally submit to API. For now, just reset / success.
                  // replace with real submit logic
                  console.log("Commission payload:", commission);
                  reset();
                  setIndex(0);
                  alert("Commission submitted (mock). Check console for payload.");
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* bottom actions for step 0 when needed (Step components include their own buttons) */}
      <div className="mt-8 text-sm opacity-70">
        <p>
          Need help? Reply to our contact email or attach references in step 1.
        </p>
      </div>
    </div>
  );
}
