class Sand {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.8,
            friction:1,
            density: 0.8
        };
        this.box = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.box);
    }

    display() {
        var pos = this.box.position;
       // var angle = this.box.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }

}