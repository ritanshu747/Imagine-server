// dalleRoutes.js
import express from "express";
import { Configuration, OpenAIApi } from "openai";

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

// GET request
router.route("/").get((req, res) => {
  res.send("DALL-E");
});

// POST request
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response?.data?.error?.message);
  }
});

export default router;

// gLoacakIyYjCCMUU
// ritanshushivhare123
// mongodb+srv://ritanshushivhare123:gLoacakIyYjCCMUU@cluster0.fgibs12.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0