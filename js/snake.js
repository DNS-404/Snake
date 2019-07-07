function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0; // size of tail
  this.tail = []; // stores snake's body except head

  this.show = function() {
    fill(255);
    noStroke();
    for(let i=0; i<this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, size, size);
    }
    rect(this.x, this.y, size, size);
  }

  this.update = function() {
    if(this.total === this.tail.length){
      for(let i=0; i<this.tail.length-1; i++){
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*size;
    this.y = this.y + this.yspeed*size;
    this.x = constrain(this.x, 0, width-size);
    this.y = constrain(this.y, 0, height-size);
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(food){
    let d = dist(this.x, this.y, food.x, food.y);
    return (d < 1);
  }

}
