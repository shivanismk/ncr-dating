import { Router } from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/image",
  verifyToken,
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No image file provided",
        });
      }

      const result = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "connectncr/profiles",
            resource_type: "image",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        stream.end(req.file!.buffer);
      });

      return res.json({
        success: true,
        secure_url: result.secure_url,
        public_id: result.public_id,
      });
    } catch (error) {
      console.error("Cloudinary upload error:", error);

      return res.status(500).json({
        success: false,
        message: "Image upload failed",
      });
    }
  }
);

export default router;

