//number
var num = 21;
console.log(num);

//string
var str = "Hey wassup";
console.log(str);

//boolean
var bool = true;
console.log(bool);

//undefined
var obj;
console.log(obj);

//null
obj = null;
console.log(null);

//Array of same data type
var arr1 = [21,31,64,54,98];
console.log(arr1);
console.log(arr1[0]);

//Arrays of different data types
var arr2 = ["Azeem",9,2021,false,"Cool",5656]
console.log(arr2);
//arr2.push(08);
//console.log(arr2);
arr2.pop();
console.log(arr2);

//Array with array
/*var arr3 = [["Hey",45,"evening"],["Anshu",2021,"Srivastava",77,55],[99,88]]
console.log(arr3);
console.log(arr3[1]);
console.log(arr3[1][0]);
console.log(arr3[0][2]);
*/
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gamestate="onsling"


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gamestate !== "launch"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gamestate="launch"
}

function keyPressed(){
    if(keyCode === 32){
   //     slingshot.attach(bird.body);
    }
}