import { model, Schema } from "mongoose";

const storiesSchema = new Schema({
    title: String,
    authId: Schema.Types.ObjectId,
    description: String,
    story: String,
    hidden: Boolean
}, {
    timestamps: true,
})

export const storiesModel = model('stories', storiesSchema)