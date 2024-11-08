'use client'
import { IStories } from "@/app/server/interface/IStories";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function AddStory({ params }: { params: { id: string } }) {
    const [editData, seteditData] = useState<IStories>({ authId: '', description: '', hidden: false, image: '', story: '', title: '' })

    const router = useRouter()

    const storyFormData = async (e: any) => {
        e.preventDefault()
        // alert('hi')
        // const mydata:IStories = {
        //     title: formdata.get('title')?.toString() || '',
        //     image: formdata.get('image')?.toString() || '',
        //     authId: formdata.get('authId')?.toString() || '',
        //     description: formdata.get('description')?.toString() || '',
        //     story: formdata.get('story')?.toString() || '',
        //     hidden: Boolean(formdata.get('hidden')) || false,
        // };
        const rawResponse = await fetch('http://localhost:3000/api/stories/' + params.id, {
            method: 'PATCH',
            cache: "no-store",
            body: JSON.stringify(editData),
        })

        router.replace('/dashboard')


        // editStoryById(params.id, editData)
    }

    const setValueToFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const elemName = e.target.name
        seteditData({ ...editData, [elemName]: e.target.value })
    }

    useEffect(() => {
        const getData = async () => {
            const rawformData = await fetch('http://localhost:3000/api/stories/' + params.id)
            const { data }: { data: IStories } = await rawformData.json()
            console.log(data);
            seteditData(data)
        }

        getData()
    }, [])


    return (
        <div>
            <form onSubmit={storyFormData} className="storyForm flex flex-col gap-5 max-w-[450px] p-5 mx-auto mt-5">
                <h2 className="text-2xl leading-3">Write a new Story</h2>
                <p className="opacity-85">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, hic!</p>
                <input type="text" name="title" placeholder="Title" value={editData.title} onChange={setValueToFormData} required />
                <input type="url" name="image" placeholder="Image url" value={editData.image} onChange={setValueToFormData} required />
                <input type="text" name="authId" placeholder="Auth Id" value={editData.authId} onChange={setValueToFormData} required />
                <textarea name="description" id="" cols={30} rows={5} value={editData.description} onChange={setValueToFormData} placeholder="Description" required></textarea>
                <textarea name="story" id="" cols={30} rows={10} placeholder="Story" value={editData.story} onChange={setValueToFormData} required></textarea>
                <input type="hidden" name="hidden" value={editData.hidden.toString()} />
                <button className="bg-white text-black p-2 rounded-md">Submit</button>
            </form>
        </div>
    );
    // else redirect('/dashboard')
}