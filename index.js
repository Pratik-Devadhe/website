
require("dotenv").config();
console.log(process.env.mongoose);
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const User = require('./init');
const ejsMate = require("ejs-mate");


app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

async function main(){
  mongoose.connect(process.env.mongoose)
}

main().then(() => console.log("mongoose connected"));

app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("views" , path.join(__dirname , "views"));       // join the index.ejs file 

app.use(express.static(path.join(__dirname , "views")));     // serve the css file



const port = 8080;




app.get("/portfolio", async (req, res) => {

  res.render("index.ejs");
});

app.get("/portfolio/skills", async (req, res) => {

  res.render("skills.ejs");
});

app.get("/portfolio/contact", async (req, res) => {

  res.render("contact.ejs");
});


app.get("/portfolio/projects", async (req, res) => {

  res.render("projects.ejs");
});


app.listen(process.env.port, () => {
  console.log(`Server running on http://localhost:${process.env.port}`);
});
