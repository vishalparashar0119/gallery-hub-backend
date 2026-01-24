import cloudinary from "../configs/cloudinaryConfig.js"

const deleteImageFromCloudnary = async (publicId) => {
      try {
            const result = await cloudinary.uploader.destroy(publicId);

            if (result.result !== "ok" && result.result !== "not found") {
                  return false;
            }

            return true;
      } catch (error) {
            console.error("utils : Cloudinary error :: ", error);
            return false
      }


}

export default deleteImageFromCloudnary;