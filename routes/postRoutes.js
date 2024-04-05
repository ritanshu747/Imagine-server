// routes/postRoutes.js
import express from "express";
import Post from "../model/postModel.js";

const router = express.Router();

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// CREATE A POST
router.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const newPost = await Post.create({ name, prompt, photo });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
