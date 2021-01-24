const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var landindForm;
var gameState;
var rules;
var game;
var player;
var engine;
var world;
var stones=[];
var renderer;
var ground;
var slingshot;
var stone;
var directionX;
var directionY;
var directionLine;

function preload() {  
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   gameState="wait";
   player=new Player(); 
   landingForm=new LandingForm();
   game=new Game();
   game.start();
   stone= new Stone(windowWidth/3,windowHeight/2,windowWidth/18,windowHeight/12,true);
   // slingshot= new Sling(stone.body,{x:windowWidth/3,y:windowHeight/2});
   directionX=(windowWidth/2);
    directionY=(windowHeight/2);
}

function draw(){
if(gameState==="wait"){
   landingForm.display();
}
   if(gameState==="rules"){
   rules.display();
}
if(gameState==="play"){
  game.play();
}
}

// function mouseDragged(){
//    if((stone.body.position.x - stone.width/2)< mouseX && (stone.body.position.x+stone.width/2)> mouseX && 
//    (stone.body.position.y - stone.height/2)< mouseY && (stone.body.position.y+stone.height/2)> mouseY ){
//       Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
//    }   
// }
// function mouseReleased(){
//   if(Math.abs(mouseX-stone.body.position.x)<stone.width && 
//    Math.abs(mouseY-stone.body.position.y)<stone.height ){
//       slingshot.fly();
//    }
// }

function keyPressed(){
   if(keyCode===32){
      Matter.Body.setPosition(stone.body,{x:windowWidth/2,y:windowHeight*5/6})
      Matter.Body.setStatic(stone.body, false)
   }
}







