// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var friends = [
  {
    routeName: "ahmeddante",
    name: "Ahmed Dante",
    photo: "Jedi Master",
    score: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
  },
  {
    routeName: "johnmuller",
    name: "John Muller",
    photo: "Sith Lord",
    score: [
        5,
        5,
        3,
        2,
        1,
        3,
        3,
        2,
        4,
        1        
    ]
  },
  {
    routeName: "walterrice",
    name: "Walter Rice",
    photo: "photo",
    score: [
        5,
        1,
        2,
        2,
        1,
        4,
        3,
        2,
        4,
        5        
    ]
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "all.html"));
});

// Displays all friends
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});


// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
