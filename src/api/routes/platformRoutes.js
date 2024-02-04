//const platformRouter = require("express").Router(); (can replace line 1 & 5)
const express = require("express");
const {
  getAllPlatforms,
  getPlatformById,
  createPlatform,
  updatePlatform,
  deletePlatform,
} = require("../controller/platformController");
const { isAuthenticated } = require("../../middlewares/auth");

const platformRoutes = express.Router();

platformRoutes.get("/", getAllPlatforms);
platformRoutes.get("/:id", getPlatformById);
platformRoutes.post("/", isAuthenticated, createPlatform);
platformRoutes.put("/:id", isAuthenticated, updatePlatform);
platformRoutes.delete("/:id", isAuthenticated, deletePlatform);

module.exports = platformRoutes;
