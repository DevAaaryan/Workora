import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } catch(error) {
        console.log(error);
    }
};

app.use("/api/user", userRoute);

app.listen(8800, () => {
    connect();
    console.log("Server is running on port 8800");
})
