import Banner from "../component/banner";
import ImageUrl from '../../assets/knight.gif'

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
        </>
    )
}

