const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.json({"message": "Hello World!"});
});

module.exports = app;

