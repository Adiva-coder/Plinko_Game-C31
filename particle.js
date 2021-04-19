class Particle{
    constructor(x, y){
        var options={
            'restitution': 0.5
        }
        this.body = Bodies.circle(x, y, 10, options);
        
        World.add(world, this.body);

        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, 10);
        pop();
    }
}