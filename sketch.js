var fixedRect, movingRect ,ball1 ,ball2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
ball1 = createSprite(300,200,70,120);
ball1.shapeColor = "green";
ball2 = createSprite(600,800,70,40);
ball2.shapeColor = "green";

fixedRect.velocityY = 5;
ball2.velocityY = -5;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 

    if( isTouching(movingRect ,ball1)){

      movingRect.shapeColor = "red";
      ball1.shapeColor = "red";
        
    }else{

      movingRect.shapeColor = "green";
      ball1.shapeColor = "green";


    }

  bounceOff(fixedRect,ball2)
  drawSprites();
}




