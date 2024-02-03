const express = require("express");
const connectDB = require("./src/config/db");
require("dotenv").config();

const app = express();
connectDB();

app.use("/api/v1/", (req, res, next) => {
  return res.status(200).json({
    data: "Works!",
  });
});

//next should be present and is good practice. example for the token without the next you check for token but do not go next.
app.use("*", (req, res, next) => {
  return res.status(404).json({ data: "404 not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
