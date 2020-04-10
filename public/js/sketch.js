var socket;

var playerColor = {}
var balls = []

function setup() {
    createCanvas(800, 700)
    background(50)
    socket = io()
    socket.on("ballData", drawBalls)

    playerColor = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
    
}

function drawBalls(ballData) {
    for (let i = 0; i < ballData.balls.length; i++) {
        balls[i].up
    }

}

function mouseClicked() {
    playerColor = {
        r: random(255),
        g: random(255),
        b: random(255)
    }

    balls.push(new Ball())
}



function draw() {
    ballData = {
        balls
    }
    socket.emit("ballData", ballData)

}

