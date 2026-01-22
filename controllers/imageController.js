import ImageModel from "../models/imageModel.js";
import uploadeImageCloudinary from "../utils/uploadeImageToCloudinary.js";

export const uploadImage = async (req, res) => {
      try {
            const { buffer } = req.file;
            const { email } = req.admin;
            const uploadedImage = await uploadeImageCloudinary(buffer);
            const result = await ImageModel.create({
                  image : {
                        imageUrl : uploadedImage.imageUrl,
                        publicId : uploadedImage.publicId
                  },
                  uplodedBY:email
            })
            return res.status(200).json({ success: true, message: 'image uploaded successfully' , result });
      } catch (error) {
            console.log('image controller : upload Image :: ', error.message);
      }
}