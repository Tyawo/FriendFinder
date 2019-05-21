// Dependencies
var express = require("express");
var path = require("path");
// var nodemon = require("nodemon");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

 // Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
 
// parse application/json
app.use(express.json());

// Import data to display on the html pages
require("./app/routing/apiRoutes.js")(app);

// Includes these routes in the server file using Express
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
