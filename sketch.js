var s;
scl=20;
var food;

function setup() {
  createCanvas(400,400);
  s = new Snake();
  frameRate(8);
  picklocation();
}
function picklocation(){
  var cols=floor(width/scl);
  var rows=floor(height/scl) ;
  food=createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}
function draw() {
  background(50);

  if (s.eat(food)) {
    console.log("truee")
    picklocation();
  };

  s.death();
  s.update();
  s.show();
 

  fill(255,0,100);
  rect(food.x,food.y,scl,scl)
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW){
    s.dir(0,1);
  }
  else if(keyCode === RIGHT_ARROW){
    s.dir(1,0);
  }
  else if(keyCode === LEFT_ARROW){
    s.dir(-1,0);
  }
}
