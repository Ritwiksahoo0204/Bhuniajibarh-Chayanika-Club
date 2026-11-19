import { cn } from "@/lib/utils";

const tones = {
  sage: "bg-sage-100 text-sage-700",
  peach: "bg-peach-100 text-terracotta-700",
  white: "bg-white text-forest-900",
} as const;

export function Badge({
  tone = "sage",
  className,
  ...props
}: React.ComponentProps<"span"> & { tone?: keyof typeof tones }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}