const { setError } = require("../../config/error");
const { Platform } = require("../model/platforms");
//POST (create)
const createPlatform = async (req, res, next) => {
  try {
    const platformExists = await Platform.findOne({ name: req.body.name });
    if (platformExists) {
      return res.status(400).json({ error: "Platform already exists" });
    } else {
      const newPlatform = new Platform(req.body);
      const platformDB = await newPlatform.save();
      return res.status(201).json(platformDB);
    }
  } catch (err) {
    return next(setError(400, err));
  }
};

//GET (read)
const getAllPlatforms = async (req, res, next) => {
  try {
    const allPlatforms = await Platform.find().populate("games", "title stock");
    return res.status(200).json(allPlatforms);
  } catch (err) {
    return next(setError(400, err));
  }
};

//GET (read)
const getPlatformById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const platform = await Platform.findById(id).populate("games");
    return res.status(200).json(platform);
  } catch (err) {
    return next(setError(400, err));
  }
};

//PUT (update)
const updatePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlatform = await Platform.findById(id);
    const updatedPlatform = new Platform(req.body);
    updatedPlatform._id = id;

    if (updatedPlatform.games) {
      //Set is to make sure that there are no duplicates
      const uniqueSet = new Set([
        ...oldPlatform.games,
        ...updatedPlatform.games,
      ]);
      updatedPlatform.games = Array.from(uniqueSet);
    }

    const newPlatformInfo = await Platform.findByIdAndUpdate(
      id,
      updatedPlatform,
      {
        new: true,
      }
    );
    return res.status(200).json(newPlatformInfo);
  } catch (err) {
    return next(setError(400, err));
  }
};

//DELETE (delete)
const deletePlatform = async (req, res, next) => {
  try {
    const { id } = req.params;
    const platform = await Platform.findByIdAndDelete(id);
    return res.status(200).json({
      confirmation: "Platform Sucessfully Deleted",
      DeletedPlatform: platform,
    });
  } catch (err) {
    return next(setError(400, err));
  }
};

module.exports = {
  getAllPlatforms,
  createPlatform,
  deletePlatform,
  updatePlatform,
  getPlatformById,
};
