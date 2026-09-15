import { Request, Response } from "express";
import * as service from "../services/dashboard.service";

export const stats = async (_: Request, res: Response) => {
  try {
    const data = await service.getDashboardStats();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to load dashboard statistics",
    });
  }
};