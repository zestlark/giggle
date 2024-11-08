'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { IStories } from "../server/interface/IStories"

export const deleteStoryById = async (id: string) => {
    const rawResponse = await fetch('http://localhost:3000/api/stories/' + id, {
        method: 'DELETE',
        cache: "no-store"
    })
    const response = await rawResponse.json()
    console.log(response);
    revalidatePath('/dashboard')
}

export const redirectToeditById = (id: string) => {
    redirect('http://localhost:3000/editStory/' + id)
}

export const editStoryById = async (id: string,mydata:IStories) => {
    console.log(id);
    
    const rawResponse = await fetch('http://localhost:3000/api/stories/' + id, {
        method: 'PATCH',
        cache: "no-store",
        body: JSON.stringify(mydata),
    })
    const response = await rawResponse.json()
    console.log(response);
    revalidatePath('/dashboard')
}