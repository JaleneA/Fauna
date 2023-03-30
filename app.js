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

// Set the port that will host the web app
// 8080 and 3000 are typically used as development ports.
const port = process.env.PORT || 8080;

// Set view engine to ejs (essentially HTML, but with "Embedded JavaScript")
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Index (Home) page
app.get("/", function (req, res) {
    // First argument of .get() is the page route, second is a callback
    // function that takes in a request ("req") and gives a response ("res").
    
    // sendFile() allows us to load a full .html file like normal
    res.render("pages/homepage");
    
});


app.get("/login", function (req, res) {
    res.render("pages/login");
});


app.get("/user/:userName", function (req, res) {
    const userName = req.params.userName;

    res.render("pages/userpage", {
        username: userName,
    });
});


// Open web server at selected port
app.listen(port, function () {
    console.log("Server started at http://localhost:" + port);
});
