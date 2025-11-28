
"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/commissionSlice";

type Props = { onNext: () => void; onBack: () => void };

const styleOptions = [
  "Minimal",
  "Line Art",
  "Bold Colors",
  "Soft Painterly",
  "Vector / Flat",
];

export default function Step2Style({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();
  const commission = useAppSelector((s) => s.commission);

  const [style, setStyle] = useState(commission.style || "");
  const [size, setSize] = useState(commission.size || "");
  const [extras, setExtras] = useState<Record<string, boolean>>({});

  function saveAndNext() {
    // build extras object
    const extrasObj: Record<string, any> = {};
    Object.keys(extras).forEach((k) => {
      extrasObj[k] = extras[k];
    });

    dispatch(updateField({ field: "style", value: style }));
    dispatch(updateField({ field: "size", value: size }));
    dispatch(updateField({ field: "extras", value: extrasObj }));
    onNext();
  }

  return (
    <div className="bg-white">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Select Style</label>
          <div className="flex flex-wrap gap-3">
            {styleOptions.map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  style === s ? "bg-black text-white" : "bg-transparent"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Size / Resolution</label>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="e.g., 2000x2000 px / 3000 x 4000"
            className="w-full border-b border-neutral-200 py-2 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Extras</label>
          <div className="flex flex-col gap-2">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!extras["background"]}
                onChange={(e) =>
                  setExtras((p) => ({ ...p, background: e.target.checked }))
                }
              />
              <span className="ml-2">Custom Background</span>
            </label>

            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!extras["commercial"]}
                onChange={(e) =>
                  setExtras((p) => ({ ...p, commercial: e.target.checked }))
                }
              />
              <span className="ml-2">Commercial License</span>
            </label>

            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!extras["animation"]}
                onChange={(e) =>
                  setExtras((p) => ({ ...p, animation: e.target.checked }))
                }
              />
              <span className="ml-2">Simple Animation (loop)</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="px-5 py-2 rounded-full border" onClick={onBack}>
            Back
          </button>

          <button
            className="px-6 py-2 rounded-full bg-black text-white"
            onClick={saveAndNext}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
