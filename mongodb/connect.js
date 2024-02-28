import mongoose from "mongoose";

const connectDB = (DATABASE_URL) => {
    mongoose.set("strictQuery", true);

    mongoose
        .connect(DATABASE_URL)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
};

export default connectDB;
