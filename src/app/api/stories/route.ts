import { MongoDBConnect } from "@/app/_config/mongoDB";
import { IStories } from "@/app/server/interface/IStories";
import { storiesModel } from "@/app/server/model/stories.model";
import { NextResponse } from "next/server";

(async () => {
    try {
        await MongoDBConnect();
    } catch (error) {
        console.error("Database connection error:", error);
    }
})();

export const GET = async (): Promise<any> => {
    try {
        const data = await storiesModel.find({});
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 });
    }
};

export const POST = async (request: Request): Promise<any> => {
    try {
        const data = await request.json() as IStories;
        const dbData = await storiesModel.create(data);
        return NextResponse.json(dbData, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create story" }, { status: 400 });
    }
};
