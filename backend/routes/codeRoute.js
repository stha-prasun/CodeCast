import express from "express";
import { saveCode } from "../controllers/codeController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/save").post(isAuthenticated, saveCode);

export default router;