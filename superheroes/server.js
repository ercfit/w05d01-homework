const express = require("express");
const app = express();

//const superheroes = ["batman", "superman", "hulk"];

const superheroes = [
	{name: "superman", powers: ["flight","invulnerability", "x-ray vision"]},
	{name: "batman", powers: ["fast car", "Alfred", "racks on racks on racks" ]},
	{name: "hulk", powers:["superhuman strength", "phenomenal MUA", "killer temper"]}

]
app.get('/superheroes', (req, res) => {
	res.send(superheroes)
});

app.get('/superheroes/:index', (req, res) => {
	res.send(superheroes[req.params.index]);
})








app.listen(3000, () => {
	console.log("Here to save the day....");
})