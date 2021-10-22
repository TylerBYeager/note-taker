const notes = require("express").Router();
const fs = require("fs");
const path = require("path");







// notes.get("/", (req, res) => {
//     const { title, text } = req.body;

//     if (title && text) {
//         const newNote = {
//             title,
//             text,
//         };

//         const response = {
//             status: "New Note Added",
//             body: newNote,
//         };

//         res.json(response);
//     } else {
//         res.json("Note not added.");
//     }
// });

module.exports = notes;
