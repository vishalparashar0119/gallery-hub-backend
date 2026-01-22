import cloudinary from "../configs/cloudinaryConfig.js";

const uploadeImageCloudinary = async (buffer)=>{
      const byteArrayBuffer = buffer;
      const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({
                  folder : 'galleryHub'
            },(error, uploadResult) => {
                  if (error) {
                        return reject(error);
                  }
                  return resolve(uploadResult);
            }).end(byteArrayBuffer);
      });
      return {
            imageUrl : uploadResult.secure_url,
            publicId : uploadResult.public_id
      }
      
}

export default uploadeImageCloudinary;