import { Request, Response } from "express";
import * as service from "../services/profile.service";

export const create = async (req: Request, res: Response) => {
  try {

        // console.log("CREATE PROFILE BODY:", req.body);


    const profile = await service.createProfile(req.body);

 const safeProfile = {
      ...profile,
      state: profile.state !== null ? Number(profile.state) : null,
      city: profile.city !== null ? Number(profile.city) : null,
      category: profile.category !== null ? Number(profile.category) : null,
    };



    res.status(201).json(safeProfile);
  } catch (err) {

        // console.error("CREATE PROFILE ERROR:", err);


    res.status(500).json({
      message: "Failed to create profile",
    });
  }
};

// export const list = async (_: Request, res: Response) => {
//   const profiles = await service.getProfiles();

//   res.json(profiles);
// };

export const list = async (_: Request, res: Response) => {
  try {
    const profiles = await service.getProfiles();

    const safeProfiles = profiles.map(
      (profile: {
        state: bigint | null;
        city: bigint | null;
        category: bigint | null;
        [key: string]: any;
      }) => ({
        ...profile,
        state: profile.state !== null ? Number(profile.state) : null,
        city: profile.city !== null ? Number(profile.city) : null,
        category:
          profile.category !== null ? Number(profile.category) : null,
      })
    );

    res.json(safeProfiles);
  } catch (error) {
    console.error("GET PROFILES ERROR:", error);

    res.status(500).json({
      message: "Failed to load profiles",
    });
  }
};



export const search = async (req: Request, res: Response) => {
  try {
    const { category, state, city, page, limit } = req.query;

    const data = await service.searchProfiles(
      category ? String(category) : undefined,
      state ? String(state) : undefined,
      city ? String(city) : undefined,
      Number(page) || 1,
      Number(limit) || 10
    );

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to search profiles",
    });
  }
};



export const states = async (_: Request, res: Response) => {
  try {
    const data = await service.getStates();

    res.json(data);
  } catch {
    res.status(500).json({
      message: "Failed to load states",
    });
  }
};

// new function add 

export const categories = async (_: Request, res: Response) => {
  const categories = await service.getCategories();

  res.json(categories);
};


export const cities = async (req: Request, res: Response) => {
  try {
    const state = String(req.query.state);

    const data = await service.getCities(state);

    res.json(data);
  } catch {
    res.status(500).json({
      message: "Failed to load cities",
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await service.deleteProfile(id);

    res.json({
      success: true,
      message: "Profile deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete profile",
    });
  }
};


export const dashboardStats = async (
  _: Request,
  res: Response
) => {
  try {
    const stats = await service.getDashboardStats();

    res.json(stats);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to load dashboard stats",
    });
  }
};


export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const profile = await service.getProfileById(id);

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.json(profile);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch profile",
    });
  }
};

export const popularLocations = async (_: Request, res: Response) => {
  try {
    const data = await service.getPopularLocations();

    res.json(data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed",
    });
  }
};





