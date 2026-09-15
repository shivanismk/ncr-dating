import { Request, Response } from "express";
import * as service from "../services/location.service";

export const states = (_: Request, res: Response) => {
  res.json(service.getStates());
};

export const cities = (req: Request, res: Response) => {
  const state = String(req.query.state);

  res.json(service.getCities(state));
};