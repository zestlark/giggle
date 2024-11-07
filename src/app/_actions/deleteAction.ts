'use server'

import { revalidatePath } from "next/cache"

export const deleteStoryById = async (id: string) => {
    const rawResponse = await fetch('http://localhost:3000/api/stories/' + id, {
        method: 'DELETE',
        cache: "no-store"
    })
    const response = await rawResponse.json()
    console.log(response);
    revalidatePath('/dashboard')
}

export const editStoryById = async (id: string) => {
    const rawResponse = await fetch('http://localhost:3000/api/stories/' + id, {
        method: 'PATCH',
        cache: "no-store"
    })
    const response = await rawResponse.json()
    console.log(response);
    revalidatePath('/dashboard')
}