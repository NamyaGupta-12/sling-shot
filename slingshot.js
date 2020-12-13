class Slingshot{
    constructor(bodyA,bodyB){
     var options={
    length:10,
    stiffness:0.05,
    bodyA:bodyA,
    bodyB:bodyB
     }
     this.sling=Matter.Constraint.create(options)  
     World.add(world,this.sling) 
    }
    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.sling.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}