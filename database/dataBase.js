import env from 'dotenv';
env.config(); 
import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URI

const connectDb = async () => {
      try {
            await mongoose.connect(connectionString);
            console.log('database connected successfully ');
      } catch (error) {
            console.log('DataBase Js :: ', error);
      }
}

export default connectDb;