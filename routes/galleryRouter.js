import { Router } from "express";
import { fetchAllImage } from "../controllers/imageController.js";

const router = Router();

router.get('/',fetchAllImage)

export default router;