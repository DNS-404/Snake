let snake;
let size = 10;
let food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  generateFood();
}

// Make food appear in correct grid
function generateFood() {
  let cols = floor(width/size);
  let rows = floor(height/size);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(size);
}

function draw() {
  background(50);
  snake.update();
  snake.show();

  if(snake.eat(food)){
    snake.total++;
    generateFood();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, size, size);
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
