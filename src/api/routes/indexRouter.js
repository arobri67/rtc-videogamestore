const express = require("express");
const gameRoutes = require("./gameRoutes");
const platformRoutes = require("./platformRoutes");

const indexRouter = express.Router();

indexRouter.use("/games", gameRoutes);
indexRouter.use("/platforms", platformRoutes);

module.exports = { indexRouter };
