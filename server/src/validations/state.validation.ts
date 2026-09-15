import { body } from "express-validator";

export const createStateValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("State name is required"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required"),
];