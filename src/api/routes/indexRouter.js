const express = require("express");
const gameRoutes = require("./gameRoutes");
const platformRoutes = require("./platformRoutes");
const userRoutes = require("./userRoutes");

const indexRouter = express.Router();

indexRouter.use("/games", gameRoutes);
indexRouter.use("/platforms", platformRoutes);
indexRouter.use("/users", userRoutes);

module.exports = { indexRouter };
