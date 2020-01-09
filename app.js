var express = require("express");
var app = express();
var path = require("path");
var router = express.Router;

app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname, "Views", "index.html"));
});

app.use(express.static(path.join(__dirname, "Views")));
//app.use(router);

app.listen(3000, function(){
    console.log("Server running on port 3000");
});