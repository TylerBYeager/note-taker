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
    });
})
module.exports = app;
