import { Router } from "express";
import { campusRoutes, displayLocations } from "../controllers/campusesController.js";

const router = Router();

router.get(["/about", "/info"], campusRoutes);

router.get("/", displayLocations)

export default router;