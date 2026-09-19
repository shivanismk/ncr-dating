import { Router } from "express";
import * as controller from "../controllers/city.controller";

const router = Router();

router.get("/", controller.list);
router.get("/:state", controller.listByState);

export default router;
