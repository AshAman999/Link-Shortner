import express from "express";
import { nanoid } from "nanoid";
import Url from "../models/Url.js";
import { validateUrl } from "../utils/utils.js";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });

const router = express.Router();

// Short URL Generator
router.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  const baseUrl = process.env.BASE;

  const urlId = nanoid();
  if (validateUrl(originalUrl)) {
    try {
      let url = await Url.findOne({ originalUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${baseUrl}/${urlId}`;

        url = new Url({
          originalUrl,
          shortUrl,
          urlId,
          clickHistory: [], // Initialize clickHistory as an empty array
          createdAt: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
});

export default router;
