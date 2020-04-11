//Create a Pixi Application
let app = new PIXI.Application({width: 600, height: 600});
document.body.appendChild(app.view);
var socket = io(); 
var myPlayer = new Player();

var otherPlayers = {}

app.stage.interactive = true;


socket.emit("joined", {
  player: getPlayerPacket(myPlayer),
  color: myPlayer.color
})

app.stage.on("pointermove", pointerMove)



//find player whose info is comming in and draw/update
socket.on("playerData", drawOtherPlayer)
socket.on("playerMade", playerMade)

function playerMade(data) {
  otherPlayers[data.player.id] = new Player(data.player.id);
  otherPlayers[data.player.id].color = data.color;
  console.log(otherPlayers)  
}


function drawOtherPlayer(data) {

  otherPlayers[data.id].pos.x = data.player.x
  otherPlayers[data.id].pos.y = data.player.y
  drawPlayer(otherPlayers[data.id])
}

function drawPlayer(player) {
  //DRAW PLAYER W PIXI
  
  
  
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
    y: player.pos.y
  }

  return data;
}


    
