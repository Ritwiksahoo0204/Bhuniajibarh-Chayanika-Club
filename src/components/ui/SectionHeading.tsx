import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold tracking-wide text-terracotta-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-lg">{description}</p>}
    </div>
  );
}
