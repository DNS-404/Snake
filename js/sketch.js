let snake;
let gridSize = 10;
let food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  generateFood();
}

// Make food appear in correct grid
function generateFood() {
  let cols = floor(width/gridSize);
  let rows = floor(height/gridSize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gridSize);
}

function mouseClicked(){
  snake.total++;
}

function draw() {
  background(50);
  snake.death();
  snake.update();
  snake.show();

  if(snake.eat(food)){
    snake.total++;
    generateFood();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, gridSize, gridSize);
}

function keyPressed() {
  if(snake.xspeed !== 0 && snake.yspeed !== 1 && keyCode == UP_ARROW){
    snake.dir(0, -1);
  }else if(snake.xspeed !== 0 && snake.yspeed !== -1 && keyCode == DOWN_ARROW){
    snake.dir(0, 1);
  }else if(snake.xspeed !== -1 && snake.yspeed !== 0 && keyCode == RIGHT_ARROW){
    snake.dir(1, 0);
  }else if(snake.xspeed !== 1 && snake.yspeed !== 0 && keyCode == LEFT_ARROW){
    snake.dir(-1, 0);
  }
}
