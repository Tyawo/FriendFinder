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

// Friends  hard-coded (DATA) Still working on them
// =============================================================
var friends = [
  {
    routeName: "ahmeddante",
    name: "Ahmed Dante",
    photo: "Sample",
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
    photo: "Sample photo",
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

// Displays a single friend or returns false
app.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friend;

  console.log(chosen);

  for (var i = 0; i < friends.length; i++) {
    if (chosen === friends[i].name) {
      return res.json(friends[i]);
    }
  }

  return res.json(false);
});
// ======STILL WORKING ON THIS PART======

// Create New friends 
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newfriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
