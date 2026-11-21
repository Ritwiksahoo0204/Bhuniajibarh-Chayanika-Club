"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export function ShareButton({
  title,
  label,
  copiedLabel,
}: {
  title: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // The person closed the share sheet, or the browser blocked it. Nothing to do.
    }
  }

  return (
    <button type="button" onClick={share} className="btn btn-soft">
      {copied ? <Check className="h-5 w-5" aria-hidden /> : <Share2 className="h-5 w-5" aria-hidden />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}