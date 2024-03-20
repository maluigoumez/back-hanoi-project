const express = require("express");
const algorithm = express();

algorithm.use((req, res, next) => {
  res.status(200).json({
    message: "It works!",
  });
});

module.exports = algorithm;
