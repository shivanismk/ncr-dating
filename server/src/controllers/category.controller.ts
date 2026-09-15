import { Request, Response } from "express";
import * as service from "../services/category.service";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const category = await service.createCategory(req.body);

    res.status(201).json(category);
  } catch {
    res.status(500).json({
      message: "Failed to create category",
    });
  }
};

export const list = async (
  _: Request,
  res: Response
) => {
  const categories =
    await service.getCategories();

  res.json(categories);
};