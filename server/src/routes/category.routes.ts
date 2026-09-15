import { Router } from "express";

import * as controller from "../controllers/category.controller";

import { createCategoryValidator } from "../validations/category.validator";

const router = Router();

router.post(
  "/",
  createCategoryValidator,
  controller.create
);

router.get("/", controller.list);

export default router;