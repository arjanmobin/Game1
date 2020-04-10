const express = require("express")
const port = process.env.PORT || 3000;
const app = express()
const server = app.listen(port)
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require('path');
const _ = require('lodash');
const socket = require("socket.io")
const io = socket(server)

//EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))

hbs.registerPartials(path.join(__dirname, "views/partials"));

console.log("Server running")

io.sockets.on("connection", (socket) => {
   console.log(socket); 
})

app.get("/", (req, res) => {
    res.render("index.hbs")
})

// io.on("connect")