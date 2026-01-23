import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
      name : String,
      email:String,
      avatar : String,
      firebaseUid : String,
      provider : String,
      likes : [{
            type : mongoose.Schema.Types.ObjectId,
            ref:'image'
      }]

});

const UserModel = mongoose.model('user',userSchema);

export default UserModel;