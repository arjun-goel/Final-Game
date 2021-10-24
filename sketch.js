var bg,bgImg;
var soldier1,soldier2;
var bullet;
var soldier1Img,soldier2Img;
var bullet1,bullet2
var bulletgroup;
var bullet1Img,bullet2Img
var life1 = 3
var life2 = 3
function preload(){
bgImg = loadImage("bgimage.jpg")
soldier1Img = loadImage("soldier1.png")
soldier2Img = loadImage("soldier2.png")
bullet1Img = loadImage("bullet.png")
}
function setup() {
  createCanvas(1000,800);
  bg = createSprite(1000,800)
  //bg.addImage(bgImg)
  soldier1 = createSprite(80,470)
  soldier1.addImage(soldier1Img)
  soldier2 = createSprite(900,400)
  soldier2.addImage(soldier2Img)
  bulletgroup = createGroup();
}

function draw() {
  background(bgImg);
  fill ("red")
text(mouseX+":"+mouseY,mouseX,mouseY)
 //soldier1
 textSize(20);
  text("Soldier1Life: "+life1,100,20)
 if(keyDown("up")){
 soldier1.y = soldier1.y -4;
}
  if(keyDown("down")){
    soldier1.y = soldier1.y +4;
}
  if(keyDown("right")){
    soldier1.x = soldier1.x +4;
}
  if(keyDown("left")){
    soldier1.x = soldier1.x -4;
}
//soldier2
text("Soldier2Life: "+life2,800,20)
 if(keyDown("w")){
  soldier2.y = soldier2.y -4;
}
  if(keyDown("s")){
    soldier2.y = soldier2.y +4;
}
  if(keyDown("d")){
    soldier2.x = soldier2.x +4;
}
  if(keyDown("a")){
    soldier2.x = soldier2.x -4;
}
 if(keyDown("p")){
   createbullet1()
}
if(keyDown("q")){
  createbullet2()
}
if(bulletgroup.isTouching(soldier2)){
  bulletgroup.destroyEach()
life2 = life2-1
}
//if(bulletgroup.isTouching(soldier1)){
  ///bulletgroup.destroyEach()
//life1 = life1-1
//}
  drawSprites();
}
function createbullet1(){
var bullet1 = createSprite(900,200)
bullet1.addImage(bullet1Img)
bullet1.y = soldier2.y
bullet1.velocityX = -7
bullet1.scale = 0.2
bulletgroup.add(bullet1)
}
function createbullet2(){
  var bullet2 = createSprite(soldier1.x,soldier1.y)
  bullet2.addImage(bullet1Img)
  bullet2.y = soldier1.y
  bullet2.velocityX = 7
  bullet2.scale = 0.2
  bulletgroup.add(bullet2)

  }

  

