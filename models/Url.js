import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
  timestamp : {
    type : Date,
    default : Date.now,
  },
});

const UrlSchema = new mongoose.Schema({
  urlId : {
    type : String,
    required : true,
  },
  originalUrl : {
    type : String,
    required : true,
  },
  shortUrl : {
    type : String,
    required : true,
  },
  clicks : [ ClickSchema ], // Array of click timestamps
  date : {
    type : Date,
    default : Date.now,
  },
  totalClicks : {
    type : Number,
    default : 0,
  },
});

export default mongoose.model("Url", UrlSchema);
