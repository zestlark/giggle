import { MongoDBConnect } from "@/app/_config/mongoDB"
import { NextResponse } from "next/server"

(async () => {
    await MongoDBConnect()
})()

export const GET = async (): Promise<any> => {
    return NextResponse.json({ name: 'test' })
}

export const POST = async (request:Request): Promise<any> => {
    const data = await request.json()
    return NextResponse.json({ name: 'test' })
}