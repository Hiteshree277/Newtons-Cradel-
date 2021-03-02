class Rope{
    constructor(body1,body2,offsetX){
        this.offsetX=offsetX
        
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:10},
            length:10,
            stiffness:0.04,
        }
     this.rope=Constraint.create(options)
     World.add(world,this.rope);
    }

    display(){
        var pointa=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        line(pointa.x,pointa.y,pointB.x+this.offsetX,pointB.y);
    }
}