var rect1,rect2;

function setup() {
  createCanvas(windowWidth,windowHeight);

  rect1 = createSprite(width/2,height/2,50,50);
  rect1.shapeColor = "Blue";
  rect1.debug = true;

  rect2 = createSprite(200,200,30,30);
  rect2.shapeColor = "Blue";
  rect2.debug = true;

}

function draw() {
  background(0);
  
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2 && rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && rect2.y - rect1.y < rect1.height/2 + rect2.height/2 && rect1.y - rect2.y < rect1.height/2 + rect2.height/2){
   rect1.shapeColor = "red";
   rect2.shapeColor = "red";
  }else{
   rect1.shapeColor = "Blue";
   rect2.shapeColor = "Blue";
  }

  drawSprites();
}