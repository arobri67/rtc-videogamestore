const { setError } = require("../../config/error");
const { Game } = require("../model/games");

//POST (create)
const createGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);
    const gameDB = await newGame.save();
    return res.status(201).json(gameDB);
  } catch (err) {
    return next(setError(400, err));
  }
};

//GET (read)
const getAllGames = async (req, res, next) => {
  try {
    const allGames = await Game.find();
    return res.status(200).json(allGames);
  } catch (err) {
    return next(setError(400, err));
  }
};

//GET (read)
const getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    return res.status(200).json(game);
  } catch (err) {
    return next(setError(400, err));
  }
};

//PUT (update)
const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldGame = await Game.findById(id);
    const updatedGame = new Game(req.body);
    updatedGame._id = id;

    if (updatedGame.platforms) {
      //Set is to make sure that there are no duplicates
      const uniqueSet = new Set([
        ...oldGame.platforms,
        ...updatedGame.platforms,
      ]);
      updatedGame.platforms = Array.from(uniqueSet);
    }

    const newGameInfo = await Game.findByIdAndUpdate(id, updatedGame, {
      new: true,
    });
    return res.status(200).json(newGameInfo);
  } catch (err) {
    return next(setError(400, err));
  }
};

//DELETE (delete)
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await Game.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ confirmation: "Game Sucessfully Deleted", DeletedGame: game });
  } catch (err) {
    return next(setError(400, err));
  }
};

module.exports = {
  getAllGames,
  createGame,
  updateGame,
  getGameById,
  deleteGame,
};
