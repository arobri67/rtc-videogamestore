const express = require("express");
const gameRoutes = require("./gameRoutes");

const indexRouter = express.Router();

indexRouter.use("/games", gameRoutes);

module.exports = { indexRouter };
