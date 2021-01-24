class Player {
    constructor(){
        this.image=loadImage("./images/samurai.png")
        this.name=null;
        this.sprite=createSprite(windowWidth/4,windowHeight/2);
        this.sprite.addImage("samurai",this.image);
        


    }
    display(){
        
    }
}