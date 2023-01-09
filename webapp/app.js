const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const NoteRoutes = require("./routes/NoteRouter");
const path = require("path");

// create a mongoose model from the above schema and export it

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/static', express.static(path.join(__dirname, 'assets')));

// mount router middleware functions to the / route, they are callable from there
app.use("/", NoteRoutes);

module.exports = app;