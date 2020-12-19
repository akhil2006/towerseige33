class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.slingg = Constraint.create(options);
        World.add(world, this.slingg);
    }
 attach(body){
       this.slingg.bodyA = body;    
    }
    fly(){
        this.slingg.bodyA = null;
    }

    display(){
        
        if(this.slingg.bodyA){
            var pointA = this.slingg.bodyA.position;
            var pointB = this.pointB;
            stroke(68, 32, 12);
            if(pointA.x<170){
                strokeWeight(5);
                line(pointA.x-20,pointA.y+10,pointB.x-10,pointB.y+21);
                line(pointA.x-20,pointA.y+10,pointB.x+30,pointB.y+21);
            
            }
            else{
                strokeWeight(3);
                line(pointA.x+10,pointA.y+10,pointB.x-10,pointB.y+21);
                line(pointA.x+10,pointA.y+10,pointB.x+30,pointB.y+21);
               
            }
        }  
    }
    
}