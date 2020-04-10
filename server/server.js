const express = require("express")

const app = express()
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require('path');
const _ = require('lodash');

const server = app.listen(3000)
app.use(express.static("public"))

const socket = require("socket.io")

const port = process.env.PORT || 3000;

//EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../app/views/"));


console.log("Server running")

const io = socket(server)

app.get("/", (req, res) => {
    res.render("main/index.hbs")
})

// io.on("connect")