const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compBase,playerBase,player,comp;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   compBase = new ComputerBase (400,400,150,150);
  World.add(world,compBase);
playerBase = new PlayerBase(1100,400,150,150)
World.add(world,playerBase);
player = new Player(1100,300,90,120);
World.add(world,player);
comp = new Comp(400,300,90,120);
World.add(world,comp);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   compBase.display();
  playerBase.display();
  player.display();
  comp.display();

   //display Player and computerplayer


}
