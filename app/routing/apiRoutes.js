var friendData = require("../data/friends.js");

module.exports = (app) => {

  // Displays all friends in JSON format
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });
  // API POST Requests
  app.post("/api/friends", function (req, res) {
    var userScore = req.body.scores;
    var scoresArr = [];
    var bestMatch = 0;

    for (var i = 0; i < friendData.length; i++) {
      var scoreDiff = 0;

      for (var j = 0; j < userScore.length; j++) {
        scoreDiff += (Math.abs(parseInt(friendData[i]).scores[j] - parseInt(userScore[j])))
      }
      scoresArr.push(scoreDiff);
    }
    for (var i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestMatch]) {
        bestMatch = i;
      }
    }
    // Return the best match
    var soulMate = friendData[bestMatch];
    res.json(soulMate);

    console.log(req.body);
    friendData.push(req.body)
  });
  app.post("/api/clear", function(req, res){
    friendData.length =[];
    res.json({
      ok: true
    });
  });
};
// Routes
// =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//   });



//   app.get("/all", function(req, res) {
//     res.sendFile(path.join(__dirname, "all.html"));
//   });