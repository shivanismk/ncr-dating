import { body } from "express-validator";

export const createCategoryValidator = [
  body("name")
    .notEmpty()
    .withMessage("Category name is required"),

  body("slug")
    .notEmpty()
    .withMessage("Slug is required"),
];