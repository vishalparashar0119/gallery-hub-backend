import mongoose from "mongoose";


const adminSchema = mongoose.Schema({
      email : {type : String , require : true},
      password : { type : String , require : true}
})

const AdminModel = mongoose.model('admin' , adminSchema);

export default AdminModel;