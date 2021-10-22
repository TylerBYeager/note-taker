const fs = require("fs");
const path = require("path");


fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) console.log("error");

    let notes = JSON.parse(data);
    notes = console.log(data);
})

// module.exports = app;
