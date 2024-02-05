// import { v2 as cloudinary } from "cloudinary"; this is an ES6 module, we can use it but we have to make a modification in package.json (add "type": module, just below the "main")
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
