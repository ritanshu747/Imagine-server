import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import post from "./routes/post.js";
import dalle from "./routes/dalle.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", post);
app.use("/api/v1/dalle", dalle);

app.get("/", async (req, res) => {
  res.send("Hello");
});

const startServer = async () => {
  try {
    connectDB(process.env.DATABASE_URL);
    app.listen(PORT, () => console.log(`Server has started on port ${PORT} `));
  } catch (error) {
    console.log(error);
  }
};

startServer();
