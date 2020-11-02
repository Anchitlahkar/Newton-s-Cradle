const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      Constraint = Matter.Constraint,
      MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pendulum;

function setup() {
    canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;



    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options={
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint)





    bob = new Pendulum(200+50,300,"yellow");
    bobSling = new Sling(bob.body,{x:200+50, y:50})
    
    bob2 = new Pendulum(300-40+50,300,"yellow");
    bob2Sling = new Sling(bob2.body,{x:300-40+50, y:50})
    
    bob3 = new Pendulum(400-80+50,300,"yellow");
    bob3Sling = new Sling(bob3.body,{x:400-80+50, y:50})
    
    bob4 = new Pendulum(500-120+50,300,"yellow");
    bob4Sling = new Sling(bob4.body,{x:500-120+50, y:50})
    
    bob5 = new Pendulum(600-160+50,300,"yellow");
    bob5Sling = new Sling(bob5.body,{x:600-160+50, y:50})

    
}
function draw() {
    background(0);
    Engine.update(engine);
    
    bobSling.display()
    bob.display()
    
    bob2Sling.display()
    bob2.display()
    
    bob3Sling.display()
    bob3.display()
    
    bob4Sling.display()
    bob4.display()
    
    bob5Sling.display()
    bob5.display()
}

function mouseDragged() {
    Matter.Body.setPosition(bob.body,{x: mouseX, y: mouseY});
}
      

