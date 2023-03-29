// This "app.js" file is the starting point for the entire webapp

// Adds the "express" package (which allows us to create a dynamic website
// (i.e., routing)) to the dependencies list, automatically installing
// it (when necessary) if the project is moved to a different machine.
const express = require("express");

// The "path" package allows us to construct absolute paths to our page
// files without needing to manually write the path to the current
// directory, something that on different machines, we wouldn't
// be able to know
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;
// 8080 and 3000 are typically used as development ports.

// First argument of .get() is the page route, second is a callback
// function that takes in a request ("req") and gives a response ("res").
app.get("/", function (req, res) {
    // sendFile() allows us to load a full .html file like normal
    res.sendFile(path.join(__dirname, "webpages/home/index.html"));
})

app.get("/login", function (req, res) {
    // By comparison, send() inserts whatever we put directly into the
    // <body> tags of a blank page
    res.send("Welcome to the Fauna login page!");
})

app.listen(port);
console.log("Server started at http://localhost:" + port);
