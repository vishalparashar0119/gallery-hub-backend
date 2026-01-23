import { Router } from "express";
import { loginAndSignupUser } from "../controllers/authController.js";

const router = Router();

router.post('/loginAndSignup',loginAndSignupUser);

export default router;