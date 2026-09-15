import { body } from "express-validator";

export const createProfileValidator = [
  body("name").notEmpty(),
  body("state").notEmpty(),
  body("city").notEmpty(),
  body("category").notEmpty(),
  body("phone").notEmpty(),
  body("whatsapp").notEmpty(),
];