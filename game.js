class Game {
    constructor(){
        
    }
   
   
   start(){
       engine=(Engine.create());
        world=(engine.world);
        ground=new Stone(windowWidth/2,windowHeight*5/6,windowWidth,windowHeight/10,true);
        var y;
        y=windowHeight*4/6;
        directionLine=createSprite(windowWidth*5.4/10,windowHeight/1.9,8,windowHeight/4);
        directionLine.shapeColor=(" black");
      directionLine.visible=false;
      
        var changingWidth=windowWidth/13
        for(var i=0;i<7;i++){
            stones.push(new Stone (windowWidth*2/3,y,changingWidth,windowHeight/20,2));
            y=y-100;
            changingWidth=changingWidth-8;
        }
   }
   
    play(){
       Engine.update(engine);
        background("lightyellow");
       directionLine.visible=true;
        for(var s in stones){
            stones[s].display();
          }
          stone.display();
        //   slingshot.display();
        if(mouseIsOver(directionLine)){
            noFill();
            stroke("red");
            strokeWeight(3)
            ellipseMode(CENTER);
            ellipse(mouseX,mouseY,40,40);
           }
           if(mousePressedOver(directionLine)  &&stone.throw<3&&stone.readyToThrow){
               console.log("high");
               stone.throw++;
                stone.readyToThrow=false;
            directionX=mouseX-stone.body.position.x;
            directionY=mouseY-stone.body.position.y;
            console.log(mouseX,mouseY);
            Matter.Body.setStatic(stone.body, false)
            Matter.Body.applyForce(stone.body,stone.body.position,{x:directionX,y:directionY})
            setTimeout(() => {
                
             Matter.Body.setPosition(stone.body,{x:windowWidth/3,y:windowHeight/2}) 
             Matter.Body.setStatic(stone.body, true)
             Matter.Body.setVelocity(stone.body,{x:0,y:0})
             stone.readyToThrow=true;
             }, 3000);
            }
            
            if(innerWidth<450&&touchStarted()){
                console.log("high");
               stone.throw++;
                stone.readyToThrow=false;
            directionX=mouseX-stone.body.position.x;
            directionY=mouseY-stone.body.position.y;
            console.log(mouseX,mouseY);
            Matter.Body.setStatic(stone.body, false)
            Matter.Body.applyForce(stone.body,stone.body.position,{x:directionX,y:directionY})
            setTimeout(() => {
                
             Matter.Body.setPosition(stone.body,{x:windowWidth/3,y:windowHeight/2}) 
             Matter.Body.setStatic(stone.body, true)
             Matter.Body.setVelocity(stone.body,{x:0,y:0})
             stone.readyToThrow=true;
             }, 3000);
            }
           
           drawSprites();  
}
}