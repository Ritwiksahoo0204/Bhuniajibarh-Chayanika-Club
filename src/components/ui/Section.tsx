import { cn } from "@/lib/utils";

const tones = {
  cream: "bg-cream",
  sage: "bg-sage-50",
  sageDeep: "bg-sage-100",
  peach: "bg-peach-100",
} as const;

type Props = React.ComponentProps<"section"> & { tone?: keyof typeof tones };

export function Section({ tone = "cream", className, ...props }: Props) {
  return <section className={cn("section", tones[tone], className)} {...props} />;
}