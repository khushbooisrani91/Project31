const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground ; 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300 ;
//var division1 , division2 , division3 , division4 , division5 ;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
	world = engine.world;
  
  //createSprite(400, 200, 50, 50);
  ground = new Ground(450,800,1200,50);
  
  for(var k = 0 ; k <= width ; k = k + 80){
    divisions.push(new Division(k , height - divisionHeight/2 , 10 , divisionHeight));
  }

  for (var j = 40 ; j <=width ; j = j+50){
    plinkos.push(new Plinko (j , 75));
  }

  for (var j = 50 ; j<=width-10 ; j = j+50) 
  {
    plinkos.push(new Plinko( j , 175));
  }

  for(var j = 10 ; j<=width ; j = j+50)
  {
    plinkos.push(new Plinko( j , 275));
  }

  for (var j = 5 ; j <=width ; j = j+50){
    plinkos.push(new Plinko (j , 375));
  }

  Engine.run(engine)
}

/*plinkos & divisions should be pushed in setup(), not draw. Plinkos & Divisions should be 
displayed inside draw & Particle should be pushed after every 60 frames inside draw() &
then be displayed also there
Divisions should also be created as arrays (for loop), not like simple objects      
*/

function draw() {
  background(0);  
  Engine.update(engine);
  
  for(var k = 0 ; k< divisions.length; k= k+1 ){
    divisions[k].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(10,width-10),10,10));
  }

  for(var i = 0 ; i<particles.length ; i=i+1 ){
    particles[i].display();
  }
  
  for (var j = 0 ; j <plinkos.length ; j = j+1){
    plinkos[j].display();
  }

  ground.display();
}

