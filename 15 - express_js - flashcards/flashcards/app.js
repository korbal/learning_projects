const express = require("express");

const app = express();

//const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// app.set defines settings for express
app.set("view engine", "pug");

app.get("/", (req, res) => {
  // send just renders a string on the page, we'd use res.render to render a pug view file
  //res.send("pina");
  res.render("index.pug");
});

app.get("/cards", (req, res) => {
  // prompt is a variable we want to pass to the card.pug template. just use h2= prompt there OR
  res.render("card", {
    prompt: "who is buried in garnt's tomb?"
    //colors
    //hint: "think whose name it is."
  });
  //res.locals._variable_name_i want to pass
  //res.locals.prompt = "Who is buried in Grant's tomb?";
  res.render("card");
});

// port number
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
