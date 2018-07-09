const express = require("express");

const app = express();

const Fruits = require("./models/fruits")

app.get("/fruits", (req, res) => {
	res.render("index.ejs", {"fruitsList":Fruits})
});

app.get("/fruits/:index", (req, res) =>{
	res.render("show.ejs", {fruit: Fruits[req.params.index]}) //this creates a "fruit" variable in the show page
});

app.listen(3000, () => {
	console.log("I am listening on port 3000");
})
