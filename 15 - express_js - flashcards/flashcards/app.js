const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("pina");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello PINA</h1>");
});

// port number
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
