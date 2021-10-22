const app = require("express").Router();
const fs = require("fs");
const path = require("path");


fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) console.log("error");

    let notes = JSON.parse(data);
    console.log(notes);
})
module.exports = app;
