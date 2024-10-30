import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type IBannerData = {
    bannerImageUrl: string | StaticImageData,
    title: string,
    description: string,
    url?: string
}

export default function Banner({ bannerData }: { bannerData: IBannerData }) {
    return (
        <div className="relative min-h-[250px] lg:min-h-[400px]">
            <Image className="absolute h-full object-cover w-full object-bottom" src={bannerData.bannerImageUrl} alt="" />
            <div className="bg-gradient-to-b from-transparent to-black/80 absolute z-1 w-full h-full"></div>
            <div className="info max-w-[1000px] gap-[10px] -translate-x-[50%] -translate-y-[50%] mx-auto absolute top-[50%] left-[50%] w-full h-full flex flex-col justify-center items-start p-5">
                <h2 className="giggleFont tracking-wider text-2xl lg:text-[60px]">{bannerData.title}</h2>
                <p className="text-sm lg:text-lg opacity-90 max-w-[450px]">{bannerData.description}</p>
                {bannerData.url && <Link href={bannerData.url} className="border px-10 py-2 rounded-3xl">Read</Link>}
            </div>
        </div>
    )
}

