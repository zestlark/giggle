import { redirect } from "next/navigation";

export default function AddStory() {
    const storyFormData = async (formdata: FormData) => {
        'use server'
        const mydata = {
            title: formdata.get('title'),
            image: formdata.get('image'),
            authId: formdata.get('authId'),
            description: formdata.get('description'),
            story: formdata.get('story'),
            hidden: formdata.get('hidden'),

        };
        const response = await fetch('http://localhost:3000/api/stories', {
            method: 'POST',
            body:  JSON.stringify(mydata),
        });

        if (!response.ok) {
            console.log('error');

        } else {
            const result = await response.json();
            console.log('Success:', result);

            redirect('/dashboard')
        }
    }

    return (
        <div>
            <form action={storyFormData} className="storyForm flex flex-col gap-5 max-w-[450px] p-5 mx-auto mt-5">
                <h2 className="text-2xl leading-3">Write a new Story</h2>
                <p className="opacity-85">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, hic!</p>
                <input type="text" name="title" placeholder="Title" required />
                <input type="url" name="image" placeholder="Image url" required />
                <input type="text" name="authId" placeholder="Auth Id" required />
                <textarea name="description" id="" cols={30} rows={5} placeholder="Description" required></textarea>
                <textarea name="story" id="" cols={30} rows={10} placeholder="Story" required></textarea>
                <input type="hidden" name="hidden" value={'true'} />
                <button className="bg-white text-black p-2 rounded-md">Submit</button>
            </form>
        </div>
    );
}