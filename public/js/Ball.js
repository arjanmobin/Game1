function Ball() {
   
    this.radius = 35
    this.pos = createVector(random(width), random(height))
    this.vel = createVector(1,1)
    this.acc = createVector(0,0)
     
    this.color = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
}


Box.prototype.update = function() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)

    if (this.pos.x >= width || this.pos.x <= 0) {
        this.vel.x *= -1
    } else if (this.pos.y >= height || this.pos.y <= 0 ) {
        this.vel.y *= -1
    }
}

Box.prototype.show = function() {
    fill(this.color.r, this.color.g, this.color.b)
    strokeWeight(0)

    ellipse(this.pos.x, this.pos.y, this.radius, this.radius)
}