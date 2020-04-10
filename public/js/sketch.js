var socket;

var playerColor = {}

function setup() {
    createCanvas(800, 700)
    background(50)
    socket = io()
    socket.on("playerData", drawOthers)

    playerColor = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
    
}


function drawOthers(playerData) {
    noStroke();
    fill(playerData.color.r,playerData.color.g,playerData.color.b)
    ellipse(playerData.mouseX, playerData.mouseY, 36, 36)
}

function mouseClicked() {
    playerColor = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
}

function mouseDragged() {
    let playerData = {
        mouseX,
        mouseY,
        color: playerColor
    }

    socket.emit("playerData", playerData)
    noStroke();
    fill(playerColor.r, playerColor.g, playerColor.b)
    ellipse(mouseX, mouseY, 36, 36)
}

function draw() {

}
