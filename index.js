// index.js

import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/databaseConfig.js"; // Import your database connection configuration
import postRoutes from "./routes/postRoutes.js"; // Import your post routes
import dalleRoutes from "./routes/dalleRoutes.js"; // Import your dalle routes

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Use your routes
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello");
});

const startServer = async () => {
  try {
    connectDB(process.env.DATABASE_URL); // Connect to your database
    app.listen(PORT, () => console.log(`Server has started on port ${PORT} `));
  } catch (error) {
    console.log(error);
  }
};

startServer();
