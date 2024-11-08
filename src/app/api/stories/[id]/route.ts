import { mongoDBConnect } from "@/app/server/_config/mongoDB";
import { IStories } from "@/app/server/interface/IStories";
import { storiesModel } from "@/app/server/model/stories.model";
import { NextResponse } from "next/server";

export async function GET(response:Response,{ params }: { params: { id: string } }) {
    try {
        console.log(params.id);
        await mongoDBConnect()
        const data = await storiesModel.findById(params.id);
        return NextResponse.json({ data });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: "Failed to create story" }, { status: 400 });
    }
}

export async function DELETE(response:Response,{ params }: { params: { id: string } }) {
    try {
        console.log(params.id);
        await mongoDBConnect()
        const data = await storiesModel.findByIdAndDelete(params.id);
        return NextResponse.json({ data });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: "Failed to create story" }, { status: 400 });
    }
}

export async function PATCH(request: Request,{ params }: { params: { id: string } }) {
    try {
        console.log(params.id);
        await mongoDBConnect()
        const body:IStories = await request.json();
        const data = await storiesModel.findByIdAndUpdate(params.id,body);
        return NextResponse.json({ data });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: "Failed to create story" }, { status: 400 });
    }
}