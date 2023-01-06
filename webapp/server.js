const app = require("./app");
const db = require("./db");
const port = process.env.PORT || 3000;

// start web server
app.listen(port, function () {
    console.log("App is running on Port " + port);
});