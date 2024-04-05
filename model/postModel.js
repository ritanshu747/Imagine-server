// models/postModel.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Post = model("Post", postSchema);

export default Post;
