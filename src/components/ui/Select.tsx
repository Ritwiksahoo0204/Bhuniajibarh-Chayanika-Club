"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

export const Select = forwardRef<
    HTMLSelectElement,
    React.ComponentProps<"select"> & { label: string; error?: string }
>(function Select({ label, error, className, id, children, ...props }, ref) {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
        <div>
            <label htmlFor={fieldId} className="field-label">
                {label}
            </label>
            <select
                ref={ref}
                id={fieldId}
                aria-invalid={!!error}
                aria-describedby={error ? `${fieldId}-msg` : undefined}
                className={cn("field", error && "field-error", className)}
                {...props}
            >
                {children}
            </select>
            {error && (
                <p id={`${fieldId}-msg`} className="field-hint">
                    {error}
                </p>
            )}
        </div>
    );
});