  
class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launche = Constraint.create(options);
        World.add(world, this.launche);
    }

    display(){
        if (this.launche.bodyA != null) {
            var pointA = this.launche.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);    
        }
    }
    fly(){
    this.launche.bodyA = null
    }
}