import express from "express";

import Url from "../models/Url.js";

const router = express.Router();

router.post("/check", (req, res) => { res.send(req.body); });

router.get("/:urlId", async (req, res) => {
  try {
    const url = await Url.findOne({urlId : req.params.urlId});
    if (url) {
      // Add the click timestamp to the clickHistory array
      const clickTimestamp = new Date();
      url.clicks.push({timestamp : clickTimestamp});

      // Increment the totalClicks count
      url.totalClicks += 1;

      await url.save();

      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json("URL not found");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json("Server Error");
  }
});

export default router;
