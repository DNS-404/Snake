function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0; // size of tail
  this.tail = []; // stores snake's body except head

  this.show = function() {
    fill(255);
    for(let i=0; i<this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);
    }
    rect(this.x, this.y, gridSize, gridSize);
  }

  this.update = function() {
    if((this.x > 0 || (this.xspeed != -1 && this.yspeed != 0)) &&
      (this.x < width-gridSize || (this.xspeed != 1 && this.yspeed != 0)) &&
      (this.y > 0 || (this.xspeed != 0 && this.yspeed != -1)) &&
      (this.y < height-gridSize || (this.xspeed != 0 && this.yspeed != 1))){
      if(this.total === this.tail.length){
        for(let i=0; i<this.tail.length-1; i++){
          this.tail[i] = this.tail[i+1];
        }
      }
      this.tail[this.total-1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed*gridSize;
    this.y = this.y + this.yspeed*gridSize;
    this.x = constrain(this.x, 0, width-gridSize);
    this.y = constrain(this.y, 0, height-gridSize);
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(food){
    let d = dist(this.x, this.y, food.x, food.y);
    return (d < 1);
  }

  this.death = function(){
    for(let i=0; i<this.tail.length; i++){
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1){
        this.total = 0;
        this.tail = [];
      }
    }
  }

}
