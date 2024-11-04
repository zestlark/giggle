import mongoose from "mongoose";

let isConnected: boolean = false

export const mongoDBConnect = async () => {
    if (!isConnected)
        try {
            const url = "mongodb+srv://deepakkanojiya2:YTnjCc4QDAb3QcqA@cluster0.78akxjh.mongodb.net/stories?retryWrites=true&w=majority&appName=Cluster0";
            await mongoose.connect(url);
            console.log("MongoDB connected successfully");
            isConnected = true
        } catch (e) {
            console.log(e);
        }
};