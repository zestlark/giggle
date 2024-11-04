import { model, models, Schema } from "mongoose";
import { IStories } from "../interface/IStories";
import { Model } from "mongoose";

const storiesSchema = new Schema({
    title: String,
    image: String,
    // authId: Schema.Types.ObjectId,
    authId: String,
    description: String,
    story: String,
    hidden: Boolean
}, {
    timestamps: true,
})

let storiesModel: Model<IStories>

if (models.stories) {
    storiesModel = model<IStories>('stories');
} else {
    storiesModel = model<IStories>('stories', storiesSchema)
}


export { storiesModel };