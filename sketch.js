const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var engine, world;
var platform,block1,block2,block3,block4,block4,block5,block6,block7,block8,block9,slingg,polygon21;
var score = 0;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
platform = new Ground(400,300,300,20);
box1 = new Box (340,255,30,40);
box2 = new Box (385,215,30,40);
box3 = new Box (420,200,30,40);
box4 = new Box(445,230,30,40)
box5 = new Box (475,225,30,40);
box6 = new Box (365,185,30,40);
box7 = new Box (395,175,30,40);
box8 = new Box (405,195,30,40)
blox9 = new Box (370,145,30,40);

var options = {
  'density': 1.5
}
polygon21 = Bodies.circle(50,200,20,options);
World.add(world,polygon21);

slingg = new SlingShot (this.polygon21,{x:100 , y:200 });

}

function draw() {
  background("red"); 
  textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
     
  Engine.update(engine);
  platform.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  slingg.display();
  ellipseMode(RADIUS);
  ellipse(polygon21.position.x,polygon21.position.y,20,20)
  drawSprites();
}
function mouseDragged () {
  Events.on(engine, 'afterUpdate', function() {
  Matter.Body.setPosition(polygon21, {x:mouseX , y:mouseY});
});
}

function mouseReleased(){
  engine.events = {};
  slingg.fly();
}
function keyPressed(){
  if(keyCode === 32){
   Matter.Body.setPosition(this.polygon21,{x:90,y:190});   
  slingg.attach(this.polygon21);
     }
 }


 async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

 





