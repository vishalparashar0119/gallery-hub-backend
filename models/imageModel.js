import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
      imageUrl: {
            type: String,
            require: true,
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