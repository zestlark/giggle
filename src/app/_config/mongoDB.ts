import mongoose from "mongoose";

export const MongoDBConnect = async () => {
    const url = "mongodb+srv://deepakkanojiya:ldyvkzbgpsyrsc63@cluster0.78akxjh.mongodb.net/stories?retryWrites=true&w=majority&appName=Cluster0"
    await mongoose
        .connect(url)
        .then((e) => {
            console.log("connected mongoDB");
        })
        .catch();
}