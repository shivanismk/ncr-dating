// import { Router } from "express";

// import * as controller from "../controllers/profile.controller";

// import { createProfileValidator } from "../validations/profile.validator";

// const router = Router();

// router.post("/", createProfileValidator, controller.create);

// router.get("/", controller.list);

// router.get("/states", controller.states);

// router.get("/cities", controller.cities);

// router.get("/categories", controller.categories);

// router.get(
//   "/popular-locations",
//   controller.popularLocations
// );

// router.get("/search", controller.search);

// router.get("/dashboard/stats", controller.dashboardStats);

// router.delete("/:id", controller.remove);

// router.get("/:id", controller.getById);


// export default router;





import { Router } from "express";

import * as controller from "../controllers/profile.controller";

import { createProfileValidator } from "../validations/profile.validator";

import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
| Normal website users can access these routes.
*/

router.get("/", controller.list);

router.get("/states", controller.states);

router.get("/cities", controller.cities);

router.get("/categories", controller.categories);

router.get(
  "/popular-locations",
  controller.popularLocations
);

router.get("/search", controller.search);

router.get("/dashboard/stats", controller.dashboardStats);

router.get("/:id", controller.getById);


/*
|--------------------------------------------------------------------------
| Admin Protected Routes
|--------------------------------------------------------------------------
| Only authenticated admin users can create/delete profiles.
*/

router.post(
  "/",
  verifyToken,
  createProfileValidator,
  controller.create
);

router.delete(
  "/:id",
  verifyToken,
  controller.remove
);

export default router;