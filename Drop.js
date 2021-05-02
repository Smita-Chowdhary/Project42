class CreateDrops{
    constructor(x,y){
        var options = {
            friction: 0.001,
            isStatic: false
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        var position = this.rain.position;
        ellipseMode(RADIUS);
        ellipse(position.x, position.y,this.radius,this.radius);
    }
   
    
}