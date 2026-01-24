import { Router } from "express";
import { adminLogin } from "../controllers/authController.js";
import upload from "../configs/multerConfig.js";
import { editImageInfo, uploadImage } from "../controllers/imageController.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = Router();

router.post('/login' , adminLogin);

router.post('/uplodeImage',isAdmin ,  upload.single("image") , uploadImage);

router.patch('/updateImage/:id', isAdmin ,editImageInfo);

export default router;