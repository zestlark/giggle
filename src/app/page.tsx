import BackgroundWrapper from "@/app/component/backgroundWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="flex flex-col justify-center items-center bg-red-300/10 min-h-screen bg-gradient-to-b from-transparent to-black/80">
        <h1 className="giggleFont text-[70px] lg:text-[180px] md:text-[100px] mb-[0px] text-white/80">GIGGLE</h1>
        <p className="text-white -mt-[50px] mb-[30px] max-w-[500px] text-center">where every tale brings laughter and adventure! magical worlds filled with fun and friends</p>
        <Link href="/stories">
          <button className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] bg-[#E46036] rounded-full text-xl md:text-2xl hover:scale-105 transition-all duration-500 shadow-xl text-white mb-[100px]">GO</button>
        </Link>
      </div>
    </BackgroundWrapper>
  );
}
