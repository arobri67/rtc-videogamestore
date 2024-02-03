//const gameRouter = require("express").Router(); (can replace line 1 & 5)
const express = require("express");
const { getAllGames } = require("../controller/gameController");

const gameRoutes = express.Router();

gameRoutes.get("/", getAllGames);

module.exports = gameRoutes;
