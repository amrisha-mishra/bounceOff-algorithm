var rect1 , rect2,rect3,rect4;




function setup() {
  createCanvas(800,600);
 rect1 = createSprite(200,300,40,50);
 rect1.shapeColor = "pink";
 rect1.debug = true;
 rect1.velocityX = 2;
 rect2 = createSprite(600,300,70,50);
 rect2.shapeColor = "white";
 rect2.debug = true;
 rect2.velocityX = -2;
 rect3 = createSprite(200,200,40,50);
 rect3.shapeColor = "green";
 rect3.debug = true;
 rect3.velocityY = 2;
 rect4 = createSprite(200,400,40,50);
 rect4.shapeColor = "yellow";
 rect4.debug = true;
 rect4.velocityY = -2;
}

function draw() {
  background("black"); 
  bounceOff(rect1,rect2);
  bounceOff(rect3,rect4);
  drawSprites();
}
