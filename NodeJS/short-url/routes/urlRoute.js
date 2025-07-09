import express from "express";
import {
  handleGenerateNewShortURL,
  generateShortURL,
  handleGetAnalytics,
} from "../controllers/urlController.js";

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", generateShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
