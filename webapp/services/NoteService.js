const Note = require("../models/Note");

module.exports = {
    getNotes: async () => {
        const foundNotes = await Note.find();
        return foundNotes;
    },

    addNote: async (noteData) => {
        const note = new Note({
            note: noteData,
        });
        note.save();
    },
}