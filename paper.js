class Paper {
    constructor(x,y,radius){
        var options ={
            isStatic: false,
            restitution: 0.2,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.paperImage = loadImage("sprites/paper.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.paperImage,0,0,70,70);
        pop();
    }
}