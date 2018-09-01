var friends = require("../data/friends");

// Settting up API routes
function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        // Get the info from userData
        var userData = req.body;

        // Compare userData's scores to all of the other scores in the friends array
        var totalDiff = [];

        for (var i = 0; i < friends.length; i++) {

            var diff = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - parseInt(userData.scores[j]));
            }

            totalDiff.push(diff);

        };

        // Whoever's totalDiff is the lowest is the user's match
        var matchIndex = totalDiff.indexOf(Math.min(...totalDiff));

        var match = friends[matchIndex];

        // Add userData to the friends array
        friends.push(userData);

        // Send the match's info back to survey.html
        return res.json(match);
    });
};

module.exports = apiRoutes;