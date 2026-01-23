import env from 'dotenv'
env.config();

import express from 'express';
import connectDb  from './database/dataBase.js';
import cookieParser from 'cookie-parser';
import galleryRouter from './routes/galleryRouter.js';
import adminRouter from './routes/adminRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();
const port = 3001;
await connectDb();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/',galleryRouter);
app.use('/admin',adminRouter);
app.use('/user',userRouter);

app.listen(port , ()=>{
      console.log(`your server is running on http://localhost:${port}`)
});