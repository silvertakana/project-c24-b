
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box = [],pickaxe,boxes = 50,balls = 100;
var ground = [],ball = [];
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for (let index = 0; index < boxes; index++) {
		box[index] = new Box(width/2,(index*50)+100,50,50);
		//box[index] = new Box(random(width),random(height),50,50);
	}
	for (let index = 0; index < balls; index++) {
		ball[index] = new Ball(random(width),random(height),8);
	}
	
	
    ground[0] = new Ground(width/2,height,width,20);
	ground[1] = new Ground(0,height/2,20,height);
	ground[2] = new Ground(width,height/2,20,height);
	pickaxe = new Box(200,200,100,10)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(220);
  if(mouseIsPressed){
	Matter.Body.setPosition(pickaxe.body, createVector(mouseX,mouseY));
	//Matter.Body.setVelocity(pickaxe.body, createVector(0,0));
	
	
  }
  
  //box[0].position.x = mouseX;
  for (let index = 0; index < boxes; index++) {
	box[index].display();
}
for (let index = 0; index < balls; index++) {
	ball[index].display();
}
  pickaxe.display();
  drawSprites();
 
}
function throwing(x,y,force,obj){
	var xvel1 = x-obj.body.position.x;
	var yvel1 = y-obj.body.position.y;
	var xvel2 = (xvel1/abs(xvel1))* force;
	var yvel2 = (yvel1/abs(yvel1))* force;
	Matter.Body.setVelocity(obj.body, createVector(xvel2,yvel2))
}



