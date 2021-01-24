class RulesForm {
    constructor(){
        this.heading=createElement("h2");
        this.rule1=createP("You are the Samurai improving your skills ");
        this.rule2=createP("Your are given training sessions by your master and with every session your skills of aiming improves")
        this.rule3=createP("You have to hit the tiles with stones given")
        this.rule4=createP("You  have 3 throws")
        this.rule5=createP("If you don’t hit the tiles in 3 throws then you lose")
        this.rule6=createP("If in a single throw  all the stones fall down, you get 300 points ")
        this.rule7=createP("If it takes 2 throws you get 200 points.")
        this.rule8=createP("If it takes 3 throws you get 100 points")
        this.rule9=createP("After hitting the tiles, your master will throw multiple balls at you as he also wants you to be better in speed")
        this.rule10=createP("While avoiding the balls you have to re-stack the tiles")
        this.rule11=createP("While re-stacking if you:-")
        this.rule12=createP("If you get pelted by a ball your points decrease by 10  ")
        this.rule13=createP(" If you get hit by 3 balls you lose")
        this.play=createButton("PLAY");




    }
    display(){
      
        
        
        
        this.heading.html("RULES");
        this.heading.position(windowWidth*5/10,windowHeight*1/10);
        this.rule1.position(windowWidth*5/10,windowHeight*3/20);
        this.rule2.position(windowWidth*5/10,windowHeight*4/20);
        this.rule3.position(windowWidth*5/10,windowHeight*5/20);
        this.rule4.position(windowWidth*5/10,windowHeight*6/20);
        this.rule5.position(windowWidth*5/10,windowHeight*7/20);
        this.rule6.position(windowWidth*5/10,windowHeight*8/20);
        this.rule7.position(windowWidth*5/10,windowHeight*9/20);
        this.rule8.position(windowWidth*5/10,windowHeight*10/20);
        this.rule9.position(windowWidth*5/10,windowHeight*11/20);
        this.rule10.position(windowWidth*5/10,windowHeight*12/20);
        this.rule11.position(windowWidth*5/10,windowHeight*13/20);
        this.rule12.position(windowWidth*5/10,windowHeight*13.5/20);
        this.rule13.position(windowWidth*5/10,windowHeight*14/20);
        this.play.position(windowWidth*9/10,windowHeight*1/20);
        this.play.style("")

        this.rule1.style("color", "white");
        this.rule2.style("color", "white");
        this.rule3.style("color", "white");
        this.rule4.style("color", "white");
        this.rule5.style("color", "white");
        this.rule6.style("color", "white");
        this.rule7.style("color", "white");
        this.rule8.style("color", "white");
        this.rule9.style("color", "white");
        this.rule10.style("color", "white");
        this.rule11.style("color", "white");
        this.rule12.style("color", "white");
        this.rule13.style("color", "white");

        this.play.mousePressed(()=>{
            
            this.rule1.hide();
            this.rule2.hide();
            this.rule3.hide();
            this.rule4.hide();
            this.rule5.hide();
            this.rule6.hide();
            this.rule7.hide();
            this.rule8.hide();
            this.rule9.hide();
            this.rule10.hide();
            this.rule11.hide();
            this.rule12.hide();
            this.rule13.hide();
            this.heading.hide();
            this.play.hide();
            gameState="play";
           
    

        })
        

        


      
        


    }

}