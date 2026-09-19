import { Router } from "express";
import * as controller from "../controllers/location.controller";

const router = Router();

router.get("/states", controller.states);

router.get("/cities", controller.cities);

export default router; 