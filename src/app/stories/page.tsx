import Banner from "../component/banner";
import ImageUrl from '../../assets/1_i4fumIDHzHH__S-Swz0KGg.gif'
import StoryCard from "../component/storyCard";
// import { storyData } from "./data";
// import { IStories } from "../server/interface/IStories";

export const fetchCache = 'default-cache'

export default async function page() {
    const bannerData = {
        bannerImageUrl: ImageUrl,
        title: 'The Night Sky',
        description: 'In a small village, a curious girl named Mia discovers the magic of the night sky. Join her as she embarks on an enchanting adventure among the stars and learns the beauty of the universe.',
        url: '/stories/6728916461a91e3304ec7306'
    }

    const rawstoryData = await fetch('http://localhost:3000/api/stories',{cache :'no-store'})
    const storyData = await rawstoryData.json()
    console.log(storyData);


    return (
        <>
            <Banner bannerData={bannerData} />
            <StoryCard  storyData={storyData.data} />
        </>
    )
}

