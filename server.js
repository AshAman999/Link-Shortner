const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const shortId = require("shortid");
const app = express();

var shortened = "";

mongoose.connect("mongodb://127.0.0.1:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connection sucessfull");
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  // res.render("index", { shortUrls: shortUrls });
  res.render("index");
});

app.post("/shortUrls", async (req, res) => {
  (shortened = req.body.customName + shortId.generate()),
    await ShortUrl.create({
      full: req.body.fullUrl,
      short: shortened,
    });

  res.send({
    name: req.body.fullUrl,
    short: req.protocol + "://" + req.headers.host + "/" + shortened,
  });
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  console.log(
    req.protocol +
      "://" +
      req.headers.host +
      "/" +
      shortened +
      "  redirected to it's original adress  " +
      shortUrl.full
  );
  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 3000);
