
"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateField } from  "@/redux/slices/commissionSlice";

type Props = { onBack: () => void; onSubmit: () => void };

export default function Step3Contact({ onBack, onSubmit }: Props) {
  const dispatch = useAppDispatch();
  const commission = useAppSelector((s) => s.commission);

  const [name, setName] = useState(commission.contactName || "");
  const [email, setEmail] = useState(commission.contactEmail || "");
  const [social, setSocial] = useState("");

  function submit() {
    dispatch(updateField({ field: "contactName", value: name }));
    dispatch(updateField({ field: "contactEmail", value: email }));
    // Optionally save social into extras or leave out
    onSubmit();
  }

  return (
    <div className="bg-white">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            className="w-full border-b border-neutral-200 py-2 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            className="w-full border-b border-neutral-200 py-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Social / Website (optional)</label>
          <input
            className="w-full border-b border-neutral-200 py-2 outline-none"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
            placeholder="Instagram / Twitter link"
          />
        </div>

        <div className="flex justify-between items-center gap-3">
          <button className="px-5 py-2 rounded-full border" onClick={onBack}>
            Back
          </button>

          <div className="flex items-center gap-3">
            <button
              className="px-5 py-2 rounded-full border text-sm"
              onClick={() => {
                // save to redux but not submit
                dispatch(updateField({ field: "contactName", value: name }));
                dispatch(updateField({ field: "contactEmail", value: email }));
                alert("Saved (local). You can still submit.");
              }}
            >
              Save
            </button>

            <button
              className="px-6 py-2 rounded-full bg-black text-white"
              onClick={submit}
            >
              Submit Commission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
