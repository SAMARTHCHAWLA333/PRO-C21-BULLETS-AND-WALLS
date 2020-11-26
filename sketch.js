var bullet,wall;
var speed,weight;
var deformation;
var thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColour="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColour="80,80,80";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<(bullet.weight+wall.width/2))
  {
    bullet.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<100)
    {
      bullet.shapeColour="0,255,0";
    }
    if(deformation>100 && deformation<180){
      bullet.shapeColour="230,230,0";
    }
    if(deformation>180){
      bullet.shapeColour="255,0,0";
    }
    else{
      bullet.shapeColour="blue";
      bullet.shapeColour="blue";
    }
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(Thicknessofwall*Thicknessofwall*Thicknessofwall);
        if(bulletWeight=32,bulletSpeed=223,thickness=70,damage=3.68){
          wall.shapeColour="green";
        }
        if(bulletWeight=32,bulletSpeed=223,thickness=40,damage=12.43){
          wall.shapeColour="red";
        }
    }
  drawSprites();
}