var friends = require("../data/friends.js");

module.exports = function(app) {
    // Displays all friends in JSON format
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
//   app.post("/api/friends", function(req, res) {
//      if friends 
//   })

}

// Routes
// =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//   });
  
 
  
//   app.get("/all", function(req, res) {
//     res.sendFile(path.join(__dirname, "all.html"));
//   });