import Image from "next/image";

const logoUrl =
  "https://firebasestorage.googleapis.com/v0/b/leonardosousa-ls.firebasestorage.app/o/logo%2FLogo%20for%20zap.png?alt=media&token=3bb37b24-8b42-4469-8bb0-cd068ce2b4d7";

export default function FooterBrand() {
  return (
    <div className="flex items-start">
      <div className="flex h-44 w-44 items-center justify-center rounded-3xl bg-white p-5">
        <Image
          src={logoUrl}
          alt=""
          width={180}
          height={180}
          className="h-full w-full object-contain"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
