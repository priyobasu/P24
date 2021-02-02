const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
    createCanvas(800, 600);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(400, height, 800, 40);
    hammer = new Hammer(100, 100);
    stone = new Stone(200, 200, 50, 50);
    rubber = new Rubber(400, 200, 20);
    sand1=new Sand(300,500,5);
    sand2=new Sand(305,500,5);
    sand3=new Sand(310,500,5);
    sand4=new Sand(315,500,5);
    sand5=new Sand(320,500,5);
    sand6=new Sand(325,500,5);
    sand7=new Sand(330,500,5);
    sand8=new Sand(335,500,5);
    sand9=new Sand(340,500,5);
    sand10=new Sand(345,500,5);
iron=new Iron(500,200,100,50);
   

}


function draw() {
    background("blue");
    Engine.update(engine);
    rubber.display();
    ground.display();
    hammer.display();
    stone.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    
    sand10.display();
    iron.display();
    

   

}