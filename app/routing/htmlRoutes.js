var path = require("path");

module.exports = function(app){

    // when the user clicks on the survey button send him to the survey.html file
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // Send the user back to homepage if any url other than survey is used with app
    app.use("/", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}