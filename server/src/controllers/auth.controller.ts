import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function login(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

const data = await authService.login(
  email,
  password
);

res.cookie("adminToken", data.token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

return res.json({
  success: true,
  message: "Login successful",
  data,
});

  } catch (error: any) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}



export async function logout(
  _req: Request,
  res: Response
) {
  try {
    res.clearCookie("adminToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    return res.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
}


