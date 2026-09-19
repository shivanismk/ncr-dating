import { Request, Response } from "express";
import * as service from "../services/city.service";

export const list = (req: Request, res: Response) => {
  const rawState = req.query.state;
  const state = typeof rawState === "string"
    ? rawState
    : Array.isArray(rawState) && typeof rawState[0] === "string"
      ? rawState[0]
      : undefined;

  const cities = service.getCitiesByState(state);

  res.json(cities);
};

export const listByState = (req: Request, res: Response) => {
  const rawState = req.params.state;
  const state = typeof rawState === "string" ? rawState : undefined;

  const cities = service.getCitiesByState(state);

  res.json(cities);
};
