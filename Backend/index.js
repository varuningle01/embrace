const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("./Routes/Routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/embrace").then((result) => {
  console.log("Conncted to the MongoDB");
  app.listen(5000, () => {
    console.log("Server Running @ Port : 5000");
  });
});
app.use(Routes);
app.use((err, req, res, next) => {
  res.send({ error: err.message });
});
