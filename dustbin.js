class Dustbin {
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.dustbinImage = loadImage("sprites/dustbin.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.dustbinImage,600,610,150,150);
    }
}