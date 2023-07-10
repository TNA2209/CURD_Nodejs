const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
const router = require("./routers/accountRouter");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test_user")
  .then(() => console.log("Connected!"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
