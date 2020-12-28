var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var log1,log2,log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
    world = engine.world;



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log1=createSprite(420,650,200,20)
	log1.shapeColor=color("red");
	
	log2=createSprite(510,600,20,100)
	log2.shapeColor=color("red");
	
	log3=createSprite(330,600,20,100)
    log3.shapeColor=color("red");
  
    var options={
          isStatic:true
      }
  
      log1=Bodies.rectangle(420,640,200,20, options);
	World.add(world, log1);
	
	log2=Bodies.rectangle(510,600,20,100, options);
	World.add(world, log2);

	log3=Bodies.rectangle(330,600,20,100, options);
	World.add(world, log3);

  //log2=new log(510,600,20,100);
    //log3=new log(400,600,10,20);

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 // log1.display();
  //log2.display();
  //log3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
   
    Matter.Body.setStatic(packageBody,false);
  }
}



