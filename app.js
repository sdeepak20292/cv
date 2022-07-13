const express = require("express");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');


app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
})

app.get("/skills", function(req, res){
  res.render("skills");
})

app.get("/education", function(req, res){
  res.render("education");
})

app.get("/projects", function(req, res){
  res.render("projects");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
