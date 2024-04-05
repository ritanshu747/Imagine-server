// config/databaseConfig.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.DATABASE_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

export default connectDB;
