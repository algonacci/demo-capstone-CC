const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Configuring Morgan logger
app.use(morgan("dev"));

// Configuring CORS
app.use(cors());

// Defining a simple route
app.get("/", (req, res) => {
  res.json({ message: "Elon Musk!", title: "CEO of Tesla and SpaceX" });
});

module.exports = app;
