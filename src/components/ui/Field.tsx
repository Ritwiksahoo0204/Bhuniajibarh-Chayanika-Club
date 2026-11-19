"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type Shared = { label: string; error?: string; hint?: string };

function Wrapper({
  id,
  label,
  error,
  hint,
  children,
}: Shared & { id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-msg`} className="field-hint">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-msg`} className="mt-1.5 text-sm">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input"> & Shared>(
  function Input({ label, error, hint, className, id, ...props }, ref) {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
      <Wrapper id={fieldId} label={label} error={error} hint={hint}>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={!!error}
          aria-describedby={error || hint ? `${fieldId}-msg` : undefined}
          className={cn("field", error && "field-error", className)}
          {...props}
        />
      </Wrapper>
    );
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea"> & Shared>(
  function Textarea({ label, error, hint, className, id, rows = 5, ...props }, ref) {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
      <Wrapper id={fieldId} label={label} error={error} hint={hint}>
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error || hint ? `${fieldId}-msg` : undefined}
          className={cn("field", error && "field-error", className)}
          {...props}
        />
      </Wrapper>
    );
  },
);