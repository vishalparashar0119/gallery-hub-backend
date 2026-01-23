import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
      title: {
            type: String,
            require: true
      },
      image: {
            imageUrl: {
                  type: String,
                  requrie: true
            },
            publicId: {
                  type: String,
                  requrie: true
            }
      },
      likes: {
            type: Number,
            default: 0
      },
      uplodedBY: {
            type: String,
            require: true
      }
}, {
      timestamps: true
});

const ImageModel = mongoose.model('image', imageSchema);
export default ImageModel;