import { mongoDBConnect } from "@/app/server/_config/mongoDB";
import { IStories } from "@/app/server/interface/IStories";
import { storiesModel } from "@/app/server/model/stories.model";
import { NextResponse } from "next/server";

export const defaultCache = 'auto'

export const GET = async (): Promise<any> => {
    try {
        await mongoDBConnect()
        const data = await storiesModel.find({});
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 });
    }
};

export const POST = async (request: Request): Promise<any> => {
    try {
        await mongoDBConnect();
        const data = await request.json() as IStories;
        const dbData = await storiesModel.create(data);
        return NextResponse.json(dbData, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to create story" }, { status: 400 });
    }
};
