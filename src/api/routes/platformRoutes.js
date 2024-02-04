//const platformRouter = require("express").Router(); (can replace line 1 & 5)
const express = require("express");
const {
  getAllPlatforms,
  getPlatformById,
  createPlatform,
  updatePlatform,
  deletePlatform,
} = require("../controller/platformController");

const platformRoutes = express.Router();

platformRoutes.get("/", getAllPlatforms);
platformRoutes.get("/:id", getPlatformById);
platformRoutes.post("/", createPlatform);
platformRoutes.put("/:id", updatePlatform);
platformRoutes.delete("/:id", deletePlatform);

module.exports = platformRoutes;
