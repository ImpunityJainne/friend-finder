// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

// Setting up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connecting files
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use(express.static("app/public"));
htmlRoutes(app);
apiRoutes(app);

// Tells server to listen on a port.
app.listen(PORT), function() {
    console.log("Listening on http://localhost:" + PORT);
};