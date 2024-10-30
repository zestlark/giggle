import Image from "next/image";
import { IStories } from "../server/interface/IStories";

export default function StoryCard({ storyData }: { storyData: IStories[] }) {
    return (
        <div className="grid grid-cols-4 max-w-[1000px] mx-auto px-5 gap-4">
            {storyData.map((e) =>
                <div key={e.title} className="aspect-square">
                    <img src={e.image} alt="" className="w-full h-full object-cover rounded-md" />
                </div>
            )}
        </div>
    )
}
