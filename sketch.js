const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var engine, world;
var hex;
var chain;
var ground, ground2, g1;
var score = 0;


function setup() {
  createCanvas(1500,400);

  engine = Engine.create();
  world = engine.world;


//bodies here
block8 = new Block(1030,235,30,40);
block9 = new Block(1060,235,30,40);
block10 = new Block(1090,235,30,40);
block11 = new Block(1120,235,30,40);
block12 = new Block(1150,235,30,40);
block13 = new Block(1060,195,30,40);
block14 = new Block(1090,195,30,40);
block15 = new Block(1120,195,30,40);
block16 = new Block(1090,155,30,40);
hex = new Hexa (200, 200, 50, 50);
chain = new Chain(hex.body,{x:200,y:200});
ground = new Ground(800,10,1800,20);
ground2 = new Ground(800,390,1800,20);
g1 = new Ground(1090,260,150,20)

}

function draw() {
  background("black");  
  Engine.update(engine);
  fill ("white");
  noStroke();
  text ("score:" + score ,750,40)
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  hex.display();
  chain.display();
  ground.display();
  ground2.display();
  g1.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY})
    
}

function mouseReleased(){
    chain.fly();
}


function keyPressed(){
  console.log (keyPressed)
	if(keyCode === 32){
	Matter.Body.setPosition(hex.body,{x:200, y:200})
	chain.attach(hex.body);
	}
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson =   await response.json();
  var datetime = responsejson.datetime;
  var hour = datetime.slice(11,13);
  console.log (hour);
  if (hour >= 06 && hour <= 19){
    background(255)
  }
  else{
    background(0)
  }
}