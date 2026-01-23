import { Router } from "express";
import { loginAndSignupUser } from "../controllers/authController.js";
import { likeImage } from "../controllers/imageController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";

const router = Router();

router.post('/loginAndSignup',loginAndSignupUser);

router.patch('/like/:id', isLoggedIn,likeImage);

export default router;