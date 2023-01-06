
const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const ThoughtRoutes = require("./routes/ThoughtRouter");

// create a mongoose model from the above schema and export it

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(express.static(__dirname + '/public'));

// mount router middleware functions to the /api route, they are callable from there
app.use("/api", ThoughtRoutes);

module.exports = app;