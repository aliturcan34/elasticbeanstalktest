const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the home page and changed content");
});

app.listen(3000, () => {
  console.log("accessed server");
});
