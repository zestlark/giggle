import Banner from "../component/banner";
import ImageUrl from '../../assets/1_i4fumIDHzHH__S-Swz0KGg.gif'
import StoryCard from "../component/storyCard";
import { storyData } from "./data";

export default function page() {
    const bannerData = {
        bannerImageUrl:ImageUrl,
        title:'The knight',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magnam.',
        url:'./'
    }
    return (
        <>
            <Banner bannerData={bannerData} />
            <StoryCard storyData={storyData}/>
        </>
    )
}

