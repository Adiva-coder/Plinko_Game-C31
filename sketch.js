var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var ball;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  score = 0;

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

}
 


function draw() {
  background("black");
  
  Engine.update(engine);

  textSize(35);
  fill("white")

  var a = text("10", 422, 540);
  var b = text("10", 342, 540);
  var c = text("20", 505, 540);
  var d = text("20", 264, 540);
  var e = text("30", 584, 540);
  var f = text("30", 184, 540);
  var g = text("50", 664, 540);
  var h = text("50", 104, 540);
  var i = text("100", 730, 540);
  var j = text("100", 10, 540);

  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  console.log(frameCount);
  if(frameCount % 50===0){
   ball = new Particle(random(80, 680), 0, 10);
   particles.push(ball);
  }

  //display the paricles 
  for (var m = 0; m < particles.length; m++) {
    particles[m].display();
  }
  
}
