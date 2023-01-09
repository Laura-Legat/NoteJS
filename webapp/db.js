const mongoose = require("mongoose");

// connect to mongodb
const mongoConnURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/notes"

mongoose.connect(mongoConnURL, { useNewUrlParser: true, useUnifiedTopology: true }); // default mongodb connection string
const db = mongoose.connection;

module.exports = db;