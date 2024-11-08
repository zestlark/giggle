'use client'
import Image from "next/image";
import { IStories } from "../server/interface/IStories";
import Link from "next/link";
import { deleteStoryById, redirectToeditById } from "../_actions/deleteAction";

interface IStoriesById extends IStories {
    _id: string
}

export default function StoryCard({ storyData, adminActions = false }: { storyData: IStoriesById[], adminActions?: Boolean }) {



    return (
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1000px] mx-auto px-5 gap-4 mb-5">
            {storyData.map((e) =>
                <div className="aspect-square relative group">
                    <Link href={'stories/' + e._id} key={e._id}>
                        <img src={e.image} alt="" className="w-full h-full object-cover rounded-md" />
                        <p className="line-clamp-1 group-hover:line-clamp-5 text-md mt-2 capitalize text-white/80 absolute w-full bottom-0 px-2 py-1 pt-10 bg-gradient-to-b from-transparent to-black/70 group-hover:to-black">{e.title}
                            <small className="block">{e.description}</small>
                        </p>
                    </Link>
                    {adminActions &&
                        <>
                            <div className="group-hover:flex cursor-pointer hidden absolute top-0 w-full p-2 bg-gradient-to-b from-black/40 to-transparent">
                                <Image onClick={(event: React.MouseEvent) => { event.stopPropagation(); let accept = confirm('Are you sure'); if (accept) deleteStoryById(e._id) }} src="https://img.icons8.com/?size=48&id=11997&format=png" className="bg-red-500/40 rounded-md p-1" width={30} height={30} alt="" />
                            </div>
                            <div className="group-hover:flex cursor-pointer hidden absolute top-0 left-10 w-full p-2 bg-gradient-to-b from-black/40 to-transparent">
                                <Image onClick={(event: React.MouseEvent) => { event.stopPropagation(); redirectToeditById(e._id) }} src="https://img.icons8.com/?size=24&id=86376&format=png" className="bg-blue-500/40 rounded-md p-1" width={30} height={30} alt="" />
                            </div>
                        </>
                    }
                </div>
            )}
        </div>
    )
}

{/* <p className="line-clamp-2 text-white/50"><small>{e.description}</small></p> */ }