const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    console.error(err);
    throw new Error("invalid or expired token:");
  }
};

module.exports = { generateToken, verifyToken };
