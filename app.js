import env from 'dotenv'
env.config();

import express from 'express';
import connectDb  from './database/dataBase.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;
await connectDb();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/' , (req ,res)=>{
      res.send("server is running");
})

app.listen(port , ()=>{
      console.log(`your server is running on http://localhost:3000`)
});