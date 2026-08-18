import { useState } from "react";
import type { ExportFormat, HeadshotPreset } from "../types";
import { cn } from "../lib/utils";

interface ExportActionsProps {
  publicId: string;
  selectedPreset: HeadshotPreset;
}

const FORMATS: { value: ExportFormat; label: string }[] = [
  { value: "jpg", label: "JPG" },
  { value: "png", label: "PNG" },
  { value: "webp", label: "WEBP" },
];

export default function ExportActions({
  publicId,
  selectedPreset,
}: ExportActionsProps) {
  const [format, setFormat] = useState<ExportFormat>("webp");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  return (
    <section className="px-4 py-8">
      <div className="glass-card mx-auto max-w-xl p-6">
        <h3 className="mb-4 text-center text-lg font-semibold">
          Export Your Headshot
        </h3>
        <p className="mb-6 text-center text-sm text-white/50">
          Pick a format and download your headshot
        </p>
        <div className="mb-6 flex justify-center gap-2">
          {FORMATS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFormat(f.value)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition",
                format === f.value
                  ? "bg-indigo-600 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div>
          <button>Download</button>
          <button>Open in Tab</button>
          <button>Copy URL</button>
        </div>
      </div>
    </section>
  );
}
