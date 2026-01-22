import dotenv from 'dotenv'
dotenv.config();

import express from 'express';

const app = express();
const port = 3000;

app.get('/' , (req ,res)=>{
      res.send("server is running");
})

app.listen(port , ()=>{
      console.log(`your server is running on http://localhost:3000`)
});