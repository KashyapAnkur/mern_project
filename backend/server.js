const express = require("express");
const dotenv = require("dotenv");
const data = require("./data/notes");
dotenv.config();

const app = express();

app.get("/", (req,res) => {
    res.send("Welcome to homepage");
});

app.get("/notes", (req,res) => {
    res.json(data);
});

app.get("/notes/:id", (req,res) => {
    res.send(data.find(data => data._id == req.params.id));
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server is up on PORT: ${PORT}`));