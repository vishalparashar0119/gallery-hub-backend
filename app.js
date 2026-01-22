import env from 'dotenv'
env.config();

import express from 'express';
import connectDb  from './database/dataBase.js';

const app = express();
const port = 3000;
await connectDb();

app.get('/' , (req ,res)=>{
      res.send("server is running");
})

app.listen(port , ()=>{
      console.log(`your server is running on http://localhost:3000`)
});