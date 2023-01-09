const mongoose = require("mongoose");

// define data model using Schema interface
const NoteSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    note: {
        type: String,
        required: [true, "You must think of something..."]
    },
});

// create a mongoose model from the above schema and export it
module.exports = mongoose.model("Note", NoteSchema);