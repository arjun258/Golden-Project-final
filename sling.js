class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 50
            
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        rectMode(CENTER);
        rect(this.sling.pointB.x,this.sling.pointB.y,5,5);
        
        if(this.sling.bodyA!=null){
        line(this.sling.pointB.x,this.sling.pointB.y,this.sling.bodyA.position.x,this.sling.bodyA.position.y);
        }
    }
}
