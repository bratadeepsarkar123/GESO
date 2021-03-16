var car,wall;

var s ,w,d;
function setup() {
  createCanvas(1600,400);

  s= random(55,90);
  w= random(400,1500);
  d= s*s*w*5/225000;

  car=createSprite(25, 200, 50, 50);
  car.shapeColor="white";
  car.velocityX = s;
  

  wall=createSprite(1500,200,50,200);
  wall.shapeColor="pink";

  
}

function draw() {
  background("black");  
 if(wall.x-car.x<(wall.width+car.width)/2) {
   car.velocityX=0;

   if(d<100){
     car.shapeColor="green";
     fill("white");
     textSize(30);
     text("This car is GOOD for passangers",width/2,height/2)
    }else if(d>100 && d<180){
      car.shapeColor="yellow";
      fill("white")
      textSize(30);
      text("This car is AVERAGE for passangers",width/2,height/2)
    }else if(d>180){
     car.shapeColor="red";
     fill("white")
     textSize(30);
     text("This car is LETHAL for passangers",width/2,height/2)
    }else{
      car.shapeColor="white";
    }
  } 
  drawSprites();
}