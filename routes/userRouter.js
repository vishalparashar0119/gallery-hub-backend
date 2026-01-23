import { Router } from "express";
import { loginAndSignupUser } from "../controllers/authController.js";
import { likeImage, unlikeImage } from "../controllers/imageController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";

const router = Router();

router.post('/loginAndSignup',loginAndSignupUser);

router.patch('/like/:id', isLoggedIn,likeImage);

router.patch('/unlike/:id', isLoggedIn,unlikeImage);

export default router;