import Image from "next/image";

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-red overflow-hidden border">
      <Image src={src} alt={alt} width={32} height={32}  />
    </div>
  );
}
