import express from "express";
import {
  getThemes,
  changeThemes,
  addTheme,
} from "../controllers/themeController.js";
const router = express.Router();
router.post("/get", getThemes);
router.post("/change", changeThemes);
router.post("/add", addTheme);
export default router;
