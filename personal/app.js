var createError = require("http-errors");
var express = require("express");
var path = require("path");
require("dotenv").config();
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const routes = require("./routes/routes");
let port = process.env.PORT;
var app = express();
const mongoose =require('mongoose');
const url = 'mongodb://localhost/practice';
mongoose.connect(url);
const con = mongoose.connection;
con.on('open',()=>{
  console.log('Connected with mongodb.....')
})

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
const connection = require("./config/connection");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(port, "0.0.0.0", function () {
  console.log("Server is running now on port:" + port);
  // cronJob.start();
});
//module.exports = app;
