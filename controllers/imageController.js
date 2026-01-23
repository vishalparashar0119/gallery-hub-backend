import ImageModel from "../models/imageModel.js";
import UserModel from "../models/userModel.js";
import uploadeImageCloudinary from "../utils/uploadeImageToCloudinary.js";

export const uploadImage = async (req, res) => {
      try {
            const { buffer } = req.file;
            const { email } = req.admin;
            const uploadedImage = await uploadeImageCloudinary(buffer);
            const result = await ImageModel.create({
                  image: {
                        imageUrl: uploadedImage.imageUrl,
                        publicId: uploadedImage.publicId
                  },
                  uplodedBY: email
            })
            return res.status(200).json({ success: true, message: 'image uploaded successfully', result });
      } catch (error) {
            console.log('image controller : upload Image :: ', error.message);
            return res.status(500).json({ success: false, message: 'opps somthing went wrong' });
      }
}

export const likeImage = async (req, res) => {
      try {
            const { id } = req.params;
            const { email } = req.user;

            const user = await UserModel.findOne({ email });

            if (user.likedImages.includes(id)) return res.status(409).json({ success: false, message: 'you have already like this image' });

            const image = await ImageModel.findOneAndUpdate({ _id: id }, { $inc: { likes: 1 } }, { new: true });

            if (!image) return res.status(404).json({ success: false, message: 'image not found' });

            user.likedImages.push(id);
            await user.save();

            return res.status(200).json({ success: true, message: " liked image successfully" });
      } catch (error) {
            console.log('image controller : like image :: ', error.message);
            return res.status(500).json({ success: false, message: 'opps somthing went wrong' });
      }
}
export const unlikeImage = async (req, res) => {
      try {
            const { id } = req.params;
            const { email } = req.user;

            const user = await UserModel.findOne({ email });

            if (!user.likedImages.includes(id)) return res.status(409).json({ success: false, message: 'you have not liked this image yet' });

            const image = await ImageModel.findOneAndUpdate({ _id: id }, { $inc: { likes: -1 } }, { new: true });

            if (!image) return res.status(404).json({ success: false, message: 'image not found' });

            user.likedImages = user.likedImages.filter((ids) => {
                  return ids.toString() != id;
            })

            await user.save();

            return res.status(200).json({ success: true, message: " unliked image successfully" });
      } catch (error) {
            console.log('image controller : like image :: ', error.message);
            return res.status(500).json({ success: false, message: 'opps somthing went wrong' });
      }
}

export const fetchAllImage = async (req, res) => {
      try {
             const images = await ImageModel.find();
             return res.status(200).json({success : true , message : 'all images' , images});
      } catch (error) {
            console.log('image controller : fetch all image :: ', error.message);
            return res.status(500).json({ success: false, message: 'opps somthing went wrong' });
      }
}