export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#7E9B6E" />
      <path d="M20 8c5.5 4.5 7.5 10 0 24-7.5-14-5.5-19.5 0-24z" fill="#FBF6EC" />
      <circle cx="20" cy="17" r="3" fill="#C8643F" />
    </svg>
  );
}