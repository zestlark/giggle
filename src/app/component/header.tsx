import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center items-center p-5 bg-gradient-to-b from-black/50 to-transparent fixed top-0 w-full z-10">
      <div className="max-w-[1000px] flex justify-between gap-8 w-full lg:px-5">
        <h3 className="giggleFont text-xl text-white">Giggle</h3>
        <span className="flex gap-5">
          {/* <button>Home</button> */}
          <Link href={'/dashboard'}>
            <Image className="w-12 h-12 cursor-pointer rounded-full ring-2 ring-white/50 p-1" width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s" alt="" />
          </Link>
        </span>
      </div>
    </div>
  )
}