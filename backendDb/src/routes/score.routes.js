import { Router } from "express";
import { submitResult } from "../controllers/score.controller.js";

const router = Router();

router.route("/submit").post(submitResult);

export default router;