class Stone {
    constructor(x, y, width, height, isStatic=false){
        var options1={
            'friction':0.05,
            'density':1,
            'resitution':0.01,
        }

        var options2={
            'friction':0.5,
            'density':1,
            'isStatic':true,
        }
        var options3;
        if(isStatic===true){
            options3=options2;
        }
        else{
            options3=options1;
        }
        this.image=loadImage("images/rock.png")
        


        this.body=(Matter.Bodies.rectangle(x, y, width, height, options3))
        World.add(world,this.body);
        this.width=(width);
        this.height=(height);
       
        this.throw=0;
        this.readyToThrow=true;


    }
    display(){
      
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
}