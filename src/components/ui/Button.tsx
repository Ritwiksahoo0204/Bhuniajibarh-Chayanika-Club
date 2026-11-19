import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "soft";
const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  soft: "btn-soft",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={cn("btn", variants[variant], className)} {...props} />;
}

/** Internal link (keeps the language prefix) or, with `external`, a normal link */
export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
  external?: boolean;
}) {
  const classes = cn("btn", variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}