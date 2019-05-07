// Dependencies
// =============================================================
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

 // Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Import data to display on the html pages
require("./app/routing/apiRoutes.js")(app);

// Includes these routes in the server file using Express
require("./app/routing/htmlRoutes.js")(app);

// // Displays a single friend or returns false
// app.get("/api/friends/:friend", function(req, res) {
//   var chosen = req.params.friend;

//   console.log(chosen);

//   for (var i = 0; i < friends.length; i++) {
//     if (chosen === friends[i].name) {
//       return res.json(friends[i]);
//     }
//   }

//   return res.json(false);
// });
// ======STILL WORKING ON THIS PART======

// Create New friends 
app.post("/api/friends", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
  var newfriend = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   // newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
