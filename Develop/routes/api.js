const notes = require("express").Router();
// const { readAndAppend }; //add pathway?

notes.get("/", (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
        };

        //readAndAppend(newNote, "./db/db.json");

        const response = {
            status: "New Note Added",
            body: newNote,
        };

        res.json(response);
    } else {
        res.json("Note not added.");
    }
});

module.exports = notes;
