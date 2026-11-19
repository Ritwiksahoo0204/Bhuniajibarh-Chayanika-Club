import { cn } from "@/lib/utils";

export function Card({
  hover = false,
  className,
  ...props
}: React.ComponentProps<"div"> & { hover?: boolean }) {
  return <div className={cn("card", hover && "card-hover", className)} {...props} />;
}