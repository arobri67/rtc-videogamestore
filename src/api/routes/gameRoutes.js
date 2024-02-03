//const gameRouter = require("express").Router(); (can replace line 1 & 5)
const express = require("express");
const {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} = require("../controller/gameController");

const gameRoutes = express.Router();

gameRoutes.get("/", getAllGames);
gameRoutes.get("/:id", getGameById);
gameRoutes.post("/", createGame);
gameRoutes.put("/:id", updateGame);
gameRoutes.delete("/:id", deleteGame);

module.exports = gameRoutes;
