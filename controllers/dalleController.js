// controllers/dalleController.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const dalleController = {
  generateImage: async (req, res) => {
    try {
      const { prompt ,name} = req.body;
      if(!prompt|| !name){
        return res.status(401).json({
          success:false,
          message:"Please fill all details",
        })
      }
      const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      });

      const image = aiResponse.data.data[0].b64_json;
      
      return res.status(200).json({
        success:true,
        message:"image generated successfully",
        photo:image,
      })
    } catch (error) {
      console.error(error);
      return res.status(500).json({ 
        success:false,
        message:error.message
         });
    }
  },
};

export default dalleController;
