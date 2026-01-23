import { Router } from "express";
import { fetchImage } from "../controllers/imageController.js";

const router = Router();

router.get('/',fetchImage)

export default router;