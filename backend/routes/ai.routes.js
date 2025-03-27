import express from "express";
import { fixCodeController } from "../controllers/ai.controller.js" 

const router = express.Router();

router.post('/fix-code', fixCodeController);

export default router;