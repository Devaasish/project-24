var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var engine, world, bodies;
var placeholder1, placeholder2, placeholder3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("boy.jfif")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	}

	placeholder1 = new Place(310,619,20,90);
	stroke(0);
	fill("red")

	placeholder2 = new Place(490,619,20,90);
	stroke(0);
	fill("red")

	placeholder3 = new Place(width/2,height-33,200,10);
	stroke(0);
	fill("red")

	var packageBody_options = {restitution:0, isStatic:true}

	packageSprite=createSprite(width/9, 650, 40,40);
	World.add(world,packageSprite);
	//packageSprite.addImage(packageIMG)
	//packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/4, 600, 10,10);
	World.add(world,helicopterSprite);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-33, width,10);
	World.add(world,groundSprite);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, ground_options);
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  background(255);
  rectMode(CENTER);

  packageSprite.collide(groundSprite);
  drawSprites();
  keyPressed();	
  placeholder1.display();
  placeholder2.display();
  placeholder3.display();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	//packageSprite.scale = 0.2;
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
  }
}