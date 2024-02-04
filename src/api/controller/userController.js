const { setError } = require("../../config/error");
const { User } = require("../model/user");
const { hashPassword, verifyPassword } = require("../../config/password");
const { generateToken } = require("../../config/jwt");

const register = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const hash = await hashPassword(password);
    const newUser = new User({ userName, password: hash });
    const userExists = await User.findOne({ userName });
    if (userExists) {
      return next(setError(400, "This user aleady exists"));
    }
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    next(setError(400, "can't register"));
  }
};

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName }).lean();

    if (!user) {
      return next(setError(401, "Incorrect login credentials"));
    }
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return next(setError(401, "Incorrect login credentials"));
    } else {
      const token = generateToken({ id: user._id });
      const { password: userPassword, ...restUser } = user;
      return res.status(200).json({ data: { token, user: restUser } });
    }
  } catch (err) {
    next(setError(400, `Unable to login ${err}`));
  }
};

module.exports = { register, login };
