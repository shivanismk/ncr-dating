// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// export interface AuthRequest extends Request {
//   user?: any;
// }

// export function verifyToken(
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction
// ) {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       return res.status(401).json({
//         success: false,
//         message: "Access Denied",
//       });
//     }

//     const token = authHeader.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Token Missing",
//       });
//     }

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET as string
//     );

//     req.user = decoded;

//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid Token",
//     });
//   }
// }




// ------------------------




import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
  };
}

export function verifyToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    // 1. First try HttpOnly cookie
    let token = req.cookies?.adminToken;

    // 2. Also support Authorization header
    //    This keeps existing API calls working.
    if (!token) {
      const authHeader = req.headers.authorization;

      if (authHeader?.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }

    // 3. No token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    // 4. JWT_SECRET check
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not configured");

      return res.status(500).json({
        success: false,
        message: "Server authentication configuration error",
      });
    }

    // 5. Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // 6. Store decoded user
    req.user = decoded as {
      id: number;
      email: string;
      role: string;
    };

    // 7. Continue request
    next();

  } catch (error) {
    console.error("JWT verification failed:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}