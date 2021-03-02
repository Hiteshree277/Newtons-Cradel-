class Log{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            isStatic:false,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        stroke(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}