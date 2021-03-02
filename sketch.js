
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var log1,log2,log3;
var roof;
var ground;
var rope1;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,200,400,100);
	bob1=new Bob(300,500);
	bob2=new Bob(350,500);
	bob3=new Bob(400,500);
	bob4=new Bob(450,500);
	bob5=new Bob(500,500);
	ground=new Ground(400,650,800,15);
	rope1=new Rope(bob1.body,roof.body,-100);
	rope2=new Rope(bob2.body,roof.body,-50);
	rope3=new Rope(bob3.body,roof.body,0);
	rope4=new Rope(bob4.body,roof.body,50);
	rope5=new Rope(bob5.body,roof.body,100);
	


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  rectMode(CENTER);
  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:55,y:-55})
	}
}





