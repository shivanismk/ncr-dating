import { Request, Response } from "express";
import * as service from "../services/location.service";

export const states = async (_: Request, res: Response) => {
  try {
    const states = await service.getStates();
    res.json(states);
  } catch {
    res.status(500).json({
      message: "Failed to fetch states",
    });
  }
};

export const cities = async (req: Request, res: Response) => {
  try {
    const state = String(req.query.state || "");
    const cities = await service.getCities(state);

    res.json(cities);
  } catch {
    res.status(500).json({
      message: "Failed to fetch cities",
    });
  }
};