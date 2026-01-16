import { Router } from "express";
import { campusRoutes, displayLocations, displaySingleLocation } from "../controllers/campusesController.js";

const router = Router();

router.get(["/about", "/info"], campusRoutes);

router.get("/", displayLocations);
router.get("/:id", displaySingleLocation);


export default router;