import Image from "next/image";
import { IStories } from "../server/interface/IStories";
import Link from "next/link";

interface IStoriesById extends IStories {
    _id: string
}

export default function StoryCard({ storyData }: { storyData: IStoriesById[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1000px] mx-auto px-5 gap-4 mb-5">
            {storyData.map((e) =>
                <Link href={'stories/' + e._id} key={e.title}>
                    <div className="aspect-square relative group">
                        <img src={e.image} alt="" className="w-full h-full object-cover rounded-md" />
                        <p className="line-clamp-1 group-hover:line-clamp-5 text-md mt-2 capitalize text-white/80 absolute w-full bottom-0 px-2 py-1 pt-10 bg-gradient-to-b from-transparent to-black/70 group-hover:to-black">{e.title}
                            <small className="block">{e.description}</small>
                        </p>
                    </div>
                    {/* <p className="line-clamp-2 text-white/50"><small>{e.description}</small></p> */}
                </Link>
            )}
        </div>
    )
}
