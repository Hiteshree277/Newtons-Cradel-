class Bob{
    constructor(x,y){
        var options={
            restitution:0.3,
            isStatic:true,
            friction:1,
            dencity:1.2
        }
        this.body=Matter.Bodies.circle(x,y,100,options);
        this.radius=100;
        
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(255);
        stroke("lightblue");
        //ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}