import { nanoid } from "nanoid";
import URL from "../models/urlModel.js";


const handleGenerateNewShortURL = async (req, res) => {
  const shortID = nanoid(8);
  const { url } = req.body;

  if (!url) res.status(400).json({ error: "URL is required" });

  await URL.create({
    shortId: shortID,
    redirectURL: url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
};

const generateShortURL = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  res.status(201).json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

export { handleGenerateNewShortURL, generateShortURL, handleGetAnalytics };
