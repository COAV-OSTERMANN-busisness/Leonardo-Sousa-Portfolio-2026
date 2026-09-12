import Image from "next/image";

import Link from "next/link";

import { siteConfig } from "@/config";

interface LogoProps {
  locale: string;
}

export default function Logo({ locale }: LogoProps) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={siteConfig.name}
      className="flex h-10 w-auto shrink-0 items-center"
    >
      <div className="relative flex h-10 w-20 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 shadow-sm">
        <Image
          src={siteConfig.assets.logo}
          alt={siteConfig.name}
          fill
          sizes="80px"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}