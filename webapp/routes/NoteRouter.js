const express = require("express");
const router = express.Router();
const NoteService = require("../services/NoteService");
const Note = require("../models/Note");


// list all notes stored in the db collection
router.get(process.env.ROUTER_BASE || "/notes", async function (req, res) {
    //query past database entries
    const data = await NoteService.getNotes();
    res.render("Note", {
        data,
    });
});


// insert a new note into the db collection
router.post(process.env.ROUTER_BASE || "/notes", async function (req, res) {
    const data = await NoteService.addNote(req.body.note);
    res.redirect("back");
});

module.exports = router;