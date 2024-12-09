import mongoose from "mongoose";

export const dbConnectin = (url) => {
    mongoose.connect(url).then(() => {
        console.log('DB Connected')
    }).catch((err) => console.log(err.message))
}