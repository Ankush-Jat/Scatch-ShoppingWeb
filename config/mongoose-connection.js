const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(function () {
    console.log("Connected to database");
  })
  .catch(function () {
    console.log("Error connecting to database");
    console.log(error);
  });

module.exports = mongoose.connection;
