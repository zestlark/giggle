import Banner from "../component/banner";
import ImageUrl from '../../assets/1_i4fumIDHzHH__S-Swz0KGg.gif'
import StoryCard from "../component/storyCard";
// import { storyData } from "./data";
// import { IStories } from "../server/interface/IStories";

export const fetchCache = 'default-cache'

export default async function page() {

    const rawstoryData = await fetch('http://localhost:3000/api/stories',{cache :'no-store'})
    const storyData = await rawstoryData.json()
    console.log(storyData);

    const bannerData = {
        bannerImageUrl: ImageUrl,
        title: storyData.data[storyData.data.length - 1].title,
        description: storyData.data[storyData.data.length - 1].description,
        url: '/stories/' + storyData.data[storyData.data.length - 1]._id
    }


    return (
        <>
            <Banner bannerData={bannerData} />
            <StoryCard  storyData={storyData.data} />
        </>
    )
}

