var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var gameState = "start";
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",20,700);
 text("500",100,700);
 text("500",180,700);
 text("500",260,700);
 text("100",340,700);
 text("100",420,700);
 text("100",500,700);
 text("200",580,700);
 text("200",660,700);
 text("200",740,700);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     
     score++;
   }
 
   for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   mousePressed()
  
}
function mousePressed(){
  if(keyCode === 32){
    particle=new Particle(mouseX, 10,10,10)
    particle.display()
  }
}