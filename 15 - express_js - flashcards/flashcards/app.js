const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// app.set defines settings for express
app.set("view engine", "pug");

app.get("/", (req, res) => {
  // send just renders a string on the page, we'd use res.render to render a pug view file
  //res.send("pina");
  const name = req.cookies.username;
  if (name) {
    res.render("index.pug", { name: name });
  } else {
    res.redirect("/hello");
  }
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

app.get("/hello", (req, res) => {
  // after adding name, one cannot go to /hello, it redirect to main page
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello.pug");
  }
});

app.post("/hello", (req, res) => {
  console.dir(req.body);
  // this will send a cookie to the browser after submitting the form
  res.cookie("username", req.body.username);
  res.redirect("/");
});

app.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

// port number
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
