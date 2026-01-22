import { Router } from "express";
import { adminLogin } from "../controllers/authController.js";
import upload from "../configs/multerConfig.js";
import { uploadImage } from "../controllers/imageController.js";

const router = Router();

router.post('/login' , adminLogin);

router.post('/uplodeImage', upload.single("image") , uploadImage);

export default router;