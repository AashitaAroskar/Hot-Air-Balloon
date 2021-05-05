var balloon;
var database;
function preload(){
  bg = loadImage("../pro-C35 images/bg.png");
  balloon1 = loadAnimation("../pro-35 images/balloon.png");
}
function setup() {
  createCanvas(500,500);
 var balloonSprite= createSprite(200, 200, 10, 10);
 balloonSprite.setAnimation("balloon1")
}

function draw() { 
  database= firebase.database();
  background(bg)

  if(keyDown(LEFT_ARROW)){
    balloonSprite.x = balloonSprite.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloonSprite.x = balloonSprite.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloonSprite.y = balloonSprite.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloonSprite.y = balloonSprite.y +10;
  }
  drawSprites();
}