class Player{
    constructor () {
        this.radius = 35;
        this.pos = {
            x: 200,
            y: 200
        }
    
        this.color = {
            r: getRandomInt(255),
            g: getRandomInt(255),
            b: getRandomInt(255)
        }
    } 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



