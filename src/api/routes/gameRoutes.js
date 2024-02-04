//const gameRouter = require("express").Router(); (can replace line 1 & 5)
const express = require("express");
const {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} = require("../controller/gameController");
const { isAuthenticated } = require("../../middlewares/auth");

const gameRoutes = express.Router();

gameRoutes.get("/", getAllGames);
gameRoutes.get("/:id", getGameById);
gameRoutes.post("/", isAuthenticated, createGame);
gameRoutes.put("/:id", isAuthenticated, updateGame);
gameRoutes.delete("/:id", isAuthenticated, deleteGame);

module.exports = gameRoutes;
