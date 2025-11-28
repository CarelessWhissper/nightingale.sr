// components/commission/steps/Step1Basic.tsx

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/commissionSlice";

type Props = { onNext: () => void };

export default function Step1Basic({ onNext }: Props) {
  const dispatch = useAppDispatch();
  const commission = useAppSelector((s) => s.commission);

  const [localDesc, setLocalDesc] = useState(commission.description);
  const [localType, setLocalType] = useState(commission.type || "");

  function save() {
    dispatch(updateField({ field: "type", value: localType }));
    dispatch(updateField({ field: "description", value: localDesc }));
    onNext();
  }

  // handle file uploads -> convert to dataURL and store
  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const out: string[] = [...commission.references];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const dataUrl = await readFileAsDataURL(file);
      out.push(dataUrl);
    }
    dispatch(updateField({ field: "references", value: out }));
  };

  return (
    <div className="bg-white">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Artwork Type</label>
          <input
            className="w-full border-b border-neutral-200 focus:border-black outline-none py-2"
            placeholder="e.g., Portrait, Logo, Character, Illustration"
            value={localType}
            onChange={(e) => setLocalType(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            className="w-full border-b border-neutral-200 focus:border-black outline-none py-2 min-h-[120px] resize-none"
            placeholder="Tell us your idea — mood, references, color palette, composition..."
            value={localDesc}
            onChange={(e) => setLocalDesc(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            References (optional)
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            id="fileUpload"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <label
            htmlFor="fileUpload"
            className="inline-block px-6 py-2 rounded-full border border-black text-black cursor-pointer hover:bg-black hover:text-white transition"
          >
            Choose Files
          </label>

          {/* Preview */}
          <div className="mt-3 flex flex-wrap gap-3">
            {commission.references.map((r, i) => (
              <div
                key={i}
                className="w-24 h-24 rounded-md overflow-hidden border"
              >
                <img
                  src={r}
                  className="w-full h-full object-cover"
                  alt={`reference-${i}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            className="px-5 py-2 rounded-full border border-neutral-200 text-sm"
            onClick={() => {
              // clear fields locally & redux if wanted — here we keep existing
              setLocalDesc("");
              setLocalType("");
            }}
          >
            Clear
          </button>

          <button
            className="px-6 py-2 rounded-full bg-black text-white text-sm"
            onClick={save}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function readFileAsDataURL(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
