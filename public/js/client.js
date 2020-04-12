//Create a Pixi Application
let app = new PIXI.Application({width: 600, height: 600});
document.body.appendChild(app.view);
var socket = io(); 
var myPlayer = new Player();

var otherPlayers = {}

app.stage.interactive = true;


socket.emit("joined", {
  playerPacket: getPlayerPacket(myPlayer),
  color: myPlayer.color
})



app.stage.on("pointermove", pointerMove)



//find player whose info is comming in and draw/update
socket.on("playerData", drawOtherPlayer)
socket.on("playerMade", playerMade)

function playerMade(data) {
  createPlayer(data)
  drawOtherPlayer(otherPlayers[data.id]) 
}

function createPlayer(data) {
  otherPlayers[data.id] = new OtherPlayer(data.id, data.playerPacket, data.color);
}

function drawOtherPlayer(data) {

  
  if (!(data.id in otherPlayers)) {
    createPlayer(data)
  }
  otherPlayers[data.id].pos.x = data.playerPacket.x
  otherPlayers[data.id].pos.y = data.playerPacket.y

  console.log("OPA: ", data.id.substring(0,5), otherPlayers[data.id].pos.x, otherPlayers[data.id].pos.y)
}

function drawPlayer(player) {
    let circle = PIXI.Graphics()
    
  
  
  
}

function updateMyPlayer(x,y) {
  myPlayer.pos.x = x;
  myPlayer.pos.y = y;
  drawPlayer(myPlayer); 
}

function sendPlayerData() {
  socket.emit("playerData", getPlayerPacket(myPlayer))
}

function pointerMove(e) {
  let mouseX = e.data.global.x
  let mouseY = e.data.global.y

  updateMyPlayer(mouseX, mouseY)
  sendPlayerData()

}

function getPlayerPacket(player) {
  let data = {
    x: player.pos.x,
    y: player.pos.y,
  }

  return data;
}
