const { isAuthenticated } = require("../../middlewares/auth");
const { register, login } = require("../controller/userController");

const userRoutes = require("express").Router();

userRoutes.post("/register", [isAuthenticated], register);
userRoutes.post("/login", login);

module.exports = userRoutes;
