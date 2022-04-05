
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall;
var ball1;
var ball2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   var ball2_option={
     restitution: 1.5
   }
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
wall= Bodies.rectangle(210,310,100,20,ground_options);
World.add(world,wall)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball1= Bodies.circle(210,100,10,ball_options);
  World.add(world,ball1);
  ball2=Bodies.circle(300,50,25,ball2_option);
  World.add(world,ball2)
  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 rect(wall.position.x,wall.position.y,100,20)
 ellipse(ball1.position.x,ball1.position.y,10)
 ellipse(ball2.position.x,ball2.position.y,25)
}

