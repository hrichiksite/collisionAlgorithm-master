var fixedRect, movingRect;

var  ob1, ob2, ob3, ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  ob1= createSprite(100,100,50,50);
  ob1.shapeColor= "green";

  ob2= createSprite(200,100,50,50);
  ob2.shapeColor= "green";

  ob3= createSprite(300,100,50,50);
  ob3.shapeColor= "green";

  ob4= createSprite(400,100,50,50);
  ob4.shapeColor= "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,ob1)) {
  movingRect.shapeColor = "blue";
  ob1.shapeColor = "blue";
 }
 else {
  movingRect.shapeColor = "green";
  ob1.shapeColor = "green";
 }

  drawSprites();
}

function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;
}
else  {
  return false;
      }
}