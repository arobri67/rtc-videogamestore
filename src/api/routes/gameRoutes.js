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
const uploadFile = require("../../middlewares/uploadFile");

const gameRoutes = express.Router();

gameRoutes.get("/", getAllGames);
gameRoutes.get("/:id", getGameById);
gameRoutes.post("/", [isAuthenticated], uploadFile.single("image"), createGame);
gameRoutes.put(
  "/:id",
  [isAuthenticated],
  uploadFile.single("image"),
  updateGame
);
gameRoutes.delete("/:id", [isAuthenticated], deleteGame);

module.exports = gameRoutes;
