import { Header } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/bg-light-wave-overlay.png"
        height={0}
        width={1250}
        alt="light wave"
        className="object-contain absolute right-0 mix-blend-screen w-[1250px] max-sm:hidden"
      />
      <Header />
    </div>
  );
}
