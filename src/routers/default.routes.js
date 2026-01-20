import { Router } from "express";
import { home } from "../controllers/default.controller.js"
 
const router = Router();

router.get("/", home);

export default router;