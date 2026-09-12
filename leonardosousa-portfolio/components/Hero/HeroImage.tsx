import Image from "next/image";
import { siteConfig } from "@/config";

interface HeroImageProps {
  alt: string;
  dataAos?: string;
}

export default function HeroImage({
  alt,
  dataAos,
}: HeroImageProps) {
  return (
    <div
      className="relative mx-auto w-full max-w-md flex-1 lg:max-w-lg"
      data-aos={dataAos}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-secondary)] bg-[var(--color-surface)]">
        <Image
          src={siteConfig.assets.profile}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}