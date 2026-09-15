import { Router } from "express";
import * as controller from "../controllers/dashboard.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.get("/stats", verifyToken, controller.stats);

export default router;