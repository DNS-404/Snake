var snake;

function setup() {
  createCanvas(800, 600);
  snake = new Snake();
}

function draw() {
  background(50);
  snake.update();
  snake.show();
}

function keyPressed() {
  if(keyCode == UP_ARROW){
    snake.dir(0, -1);
  }else if(keyCode == DOWN_ARROW){
    snake.dir(0, 1);
  }else if(keyCode == RIGHT_ARROW){
    snake.dir(1, 0);
  }else if(keyCode == LEFT_ARROW){
    snake.dir(-1, 0);
  }
}
