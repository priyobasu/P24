class Stone {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            friction: 0.8,
            density: 1.0,
            isStatic:false
        };
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        World.add(world, this.box);
    }

    display() {
        var pos2 = this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos2.x, pos2.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
    }

}