const express = require("express");
const router = express.Router();
const ThoughtService = require("../services/ThoughtService");
const Thought = require("../models/Thought");


// list all thoughts stored in the collection
router.get("/thoughts", async function (req, res) {
    //query past database entries
    const data = await ThoughtService.getThoughts();
    res.render("Thought", {
        data,
    });
});


// insert a new thought into the collection
router.post("/thoughts", async function (req, res) {
    const data = await ThoughtService.addThought(req.body.thought);
    res.redirect("back");
});

module.exports = router;