import Link from "next/link";
import Header from "../component/header";
import StoryCard from "../component/storyCard";

export default async function Dashboard() {
    const rawstoryData = await fetch('http://localhost:3000/api/stories', {
        next: { revalidate: 10 },
        cache: "no-cache"
    })
    const storyData = await rawstoryData.json()
    return (
        <div>
            <Header />
            <div className="mt-[100px] max-w-[1000px] mx-auto">
                <Link href={'/addStory'}>
                    <button className="m-5 bg-gray-400 hover:bg-white rounded-md p-2 text-black text-sm">Add New Story</button>
                </Link>
                <StoryCard storyData={storyData.data} />
            </div>
        </div>
    );
}