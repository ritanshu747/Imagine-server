// controllers/postController.js
import Post from "../models/postModel.js";
import { v2 as cloudinary } from "cloudinary";

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const { name, prompt, photo } = req.body;
      if(!name||!prompt||photo){
        return res.status(401).json({
          success:false,
          message:"Please fill all details",
        })
      }
     try{
      const photoUrl = await cloudinary.uploader.upload(photo);
        return res.status(200).json({
          success:true,
          message:"Photo uploaded successfully in cloudinary"
        })
        consolo.log(photoUrl);
     }
     catch(error){
      return res.status(401).json({
        success:false,
        message:"error.message",
      })
     }
      // Create a new post in the database
      const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url,
      });

      // Send response with the newly created post
      res.status(201).json({ success: true, messsage:"post created successfully",data: newPost });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },
};

export default postController;
