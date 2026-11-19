import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Alert({
  variant,
  children,
  className,
}: {
  variant: "success" | "error";
  children: React.ReactNode;
  className?: string;
}) {
  const isError = variant === "error";
  return (
    <div
      role={isError ? "alert" : "status"}
      className={cn(
        "flex items-start gap-3 rounded-2xl border-2 px-4 py-3 text-forest-900",
        isError ? "border-terracotta-600 bg-peach-100" : "border-sage-500 bg-sage-100",
        className,
      )}
    >
      {isError ? (
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-700" aria-hidden />
      ) : (
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage-700" aria-hidden />
      )}
      <div>{children}</div>
    </div>
  );
}