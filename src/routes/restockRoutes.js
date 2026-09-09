import express from "express";
import { RestockController } from "../controllers/restockController.js";
const router = express.Router();
router.get("/", RestockController.getAll);
router.get("/:id", RestockController.getById);
router.post("/", RestockController.create);
router.delete("/:id", RestockController.remove);
export default router;