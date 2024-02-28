import cloudinary from 'cloudinary';

exports.cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        });
        console.log("Cloudinary connected successfully");
    } catch (error) {
        console.error("Error connecting to Cloudinary:", error);
    }
};
