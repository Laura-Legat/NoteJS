const Thought = require("../models/Thought");

module.exports = {
    // list all thoughts already in the database
    getThoughts: async () => {
        const foundThoughts = await Thought.find();
        return foundThoughts;
    },

    // add thought
    addThought: async (thoughtData) => {
        const thought = new Thought({
            thought: thoughtData,
        });
        thought.save();
    },
}