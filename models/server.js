var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Setting Handlebars below
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Importing routes
var routes = require("./controllers/burg_control.js");

// Below is set
app.use("/", routes);
app.listen(port);
