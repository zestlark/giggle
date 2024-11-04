import Banner from "@/app/component/banner";
import TextAudioPlayer from "@/app/component/textAudioPlayer";

export default async function StoryById({ params }: { params: { id: string } }) {
    const rawdata = await fetch('http://localhost:3000/api/stories/' + params.id);
    const data = await rawdata.json()

    const bannerData = {
        bannerImageUrl: data.data.image,
        title: data.data.title,
        description: data.data.story //.slice(0,150),
        // url: './'
    }

    return (
        <div>
            <Banner align="center" bannerData={bannerData} fullstory={true} >
                <TextAudioPlayer story={data.data.story} />
            </Banner>
        </div>
    )
}