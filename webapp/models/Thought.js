const mongoose = require("mongoose");

// define data model using Schema interface
const ThoughtSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    thought: {
        type: String,
        required: [true, "You must think of something..."]
    },
});

// create a mongoose model from the above schema and export it
module.exports = mongoose.model("Thought", ThoughtSchema);