import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type IBannerData = {
    bannerImageUrl: string | StaticImageData,
    title: string,
    description: string,
    url?: string
}

export default function Banner({ bannerData, align = 'left', fullstory = false, children='' }: { bannerData: IBannerData, align?: string, fullstory?: boolean,children?:React.ReactNode }) {
    return (
        <>
            <div className="relative min-h-[350px] lg:min-h-[400px]">
                <Image width={1000} height={1000} className={`absolute h-full object-cover w-full ${fullstory ? 'object-center' : 'object-bottom'}`} src={bannerData.bannerImageUrl} alt="" />
                <div className="bg-gradient-to-b from-transparent to-black/100 absolute z-1 w-full h-full"></div>
                <div className={`info max-w-[1000px] gap-[10px] -translate-x-[50%] -translate-y-[50%] mx-auto absolute top-[50%] left-[50%] w-full h-full flex flex-col justify-center  ${align == 'center' ? 'items-center text-center justify-start mt-[150px] lg:mt-[200px] gap-10' : 'items-start'} ${fullstory ? 'pb-14' : ''} p-5`}>
                    <h2 className={`giggleFont tracking-wider text-4xl lg:text-[60px] leading-[60px]`}>{bannerData.title}</h2>
                    {children}
                    {!fullstory &&
                        <p className={`text-sm lg:text-lg opacity-90 max-w-[450px] ${fullstory ? 'leading-[20px]' : 'line-clamp-2'}`}>{bannerData.description}</p>
                    }
                    {bannerData.url && <Link href={bannerData.url} className="border px-10 py-2 rounded-3xl">Read</Link>}
                </div>
            </div>

            {fullstory &&

                <p className={`text-sm text-center lg:text-lg opacity-90 max-w-[550px] p-5 mx-auto leading-[30px] mt-10`}>{bannerData.description}</p>
            }
        </>
    )
}

