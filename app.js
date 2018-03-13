const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
let app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


module.exports = app;
