var socket;

function setup() {
    createCanvas(800, 700)
    background(50)
    socket = io()
    socket.on("mouse", drawOthers)
}

function drawOthers(mouseData) {
    noStroke();
    fill(255)
    ellipse(mouseData.x, mouseData.y, 36, 36)
}



function mouseDragged() {
    let data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit("mouse", data)
    noStroke();
    fill(255)
    ellipse(mouseX, mouseY, 36, 36)
}

function draw() {


}
