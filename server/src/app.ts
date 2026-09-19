import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import uploadRoutes from "./routes/upload.routes";
import locationRoutes from "./routes/location.routes";
import profileRoutes from "./routes/profile.routes";
import authRoutes from "./routes/auth.routes";
import categoryRoutes from "./routes/category.routes";
import cityRoutes from "./routes/city.routes";
import dashboardRoutes from "./routes/dashboard.routes";

// import cookieParser from "cookie-parser";

const app = express();



app.use(
  cors({
    // origin: "http://localhost:3001",
    // credentials: true,
    origin: [
  "http://localhost:3001",
  "https://connectncr.in",
  "https://www.connectncr.in",
],
credentials: true,
  })
);

app.use(helmet());

app.use(morgan("dev"));

// app.use(cookieParser());
app.use(express.json());
app.use(cookieParser());

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "All India CGs API Running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/uploads", uploadRoutes);

export default app;


