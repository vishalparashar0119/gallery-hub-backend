import { Router } from "express";
import { userLogin, logout } from "../controllers/authController.js";
import { likeImage, unlikeImage } from "../controllers/imageController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";

const router = Router();

router.post('/login',userLogin);

router.patch('/like/:id', isLoggedIn,likeImage);

router.patch('/unlike/:id', isLoggedIn,unlikeImage);

router.post('/logout', logout);

export default router;