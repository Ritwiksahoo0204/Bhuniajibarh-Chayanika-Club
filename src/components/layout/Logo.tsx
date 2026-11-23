import Image from "next/image";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Bhuniajibarh Chayanika Club logo"
      width={40}
      height={40}
      className={`${className} rounded-full object-cover`}
      priority
    />
  );
}