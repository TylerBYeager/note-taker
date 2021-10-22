const app = require("express").Router();
const fs = require("fs");
const path = require("path");


fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) console.log("error");

    let notes = JSON.parse(data);
    console.log(notes);

    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });

    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        notes.push(newNote);
        appendNotes();
    });

    app.get("/api/notes/:id", function(req, res) {
        res.json(notes[req.params.id]);
    });

    

    function appendNotes() {
        fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) console.log("error");
            return true;
        })
    }
});
module.exports = app;
