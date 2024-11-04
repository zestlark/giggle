import Banner from "../component/banner";
import ImageUrl from '../../assets/1_i4fumIDHzHH__S-Swz0KGg.gif'
import StoryCard from "../component/storyCard";
// import { storyData } from "./data";
// import { IStories } from "../server/interface/IStories";

export const fetchCache = 'default-cache'

export default async function page() {
    const bannerData = {
        bannerImageUrl: ImageUrl,
        title: 'The knight',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magnam.',
        url: './'
    }

    const rawstoryData = await fetch('http://localhost:3000/api/stories',{next : { revalidate : 10}})
    const storyData = await rawstoryData.json()
    console.log(storyData);


    return (
        <>
            <Banner bannerData={bannerData} />
            <StoryCard storyData={storyData.data} />
        </>
    )
}

