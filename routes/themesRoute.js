import express from "express";
import { getThemes, changeThemes } from "../controllers/themeController.js";
const router = express.Router();
router.post("/get", getThemes);
router.post("/change", changeThemes);
export default router;
