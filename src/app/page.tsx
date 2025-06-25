import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-water" aria-hidden="true" />
      <Image
        src="/next.svg"
        alt="PLUK logo"
        width={180}
        height={38}
        priority
        className="animate-[emerge_1.5s_ease-out_forwards]"
      />
    </div>
  );
}
