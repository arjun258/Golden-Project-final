class LandingForm {
    constructor(){
        this.background=loadImage("../images/Landing page image.jpg");
        this.heading=createElement("h1");
        this.button=createButton("BEGIN"); 
        this.button2=createButton("START");

        
       
        this.input = createInput("Name");
        this.button2.hide();
        this.input.hide();
    


    }
    display () {
        background(this.background);
        
        this.heading.html("HEADING");
        this.heading.position(windowWidth*4/10,windowHeight*1/10);
        this.button.position(windowWidth*1/2,windowHeight*1/2);
        
       
        
       

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
            this.button2.position(windowWidth*1/2,windowHeight*1/2);
            player.name=this.input.value();

            this.button2.show();
            this.input.show();
            

            

            
           

        });

        this.button2.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.button2.hide();
            this.heading.hide();
            gameState="rules";
            rules=new RulesForm();



        });



}





}