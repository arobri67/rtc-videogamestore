const { setError } = require("../../config/error");
const { Game } = require("../model/games");

const getAllGames = async (req, res, next) => {
  try {
    const allGames = await Game.find();
    return res.status(200).json(allGames);
  } catch (err) {
    return next(setError(400, err));
  }
};

module.exports = { getAllGames };
