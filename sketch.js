var x = 0;
var y = 0;
sizes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function setup(){
    createCanvas(600,400);
    
}

function draw(){
    background(0);
    backgroundColor();
    redCircle();
    face();
    lines();
    if(mouseIsPressed){
        flower(mouseX, mouseY);
    }
    fill(random(50,255),random(0,0), random(0,255));
    circles(100);
    
}

function flower(x, y){
    //stem
    noStroke();
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    //petals 
    noStroke();
    fill(177, 22, 255);
    ellipse(x+10, y-10,35,35);
    ellipse(x+10, y+10,35,35);
    ellipse(x-10, y-10,35,35);
    ellipse(x-10, y+10,35,35);
    
    //bulb
    fill(255,200,0);
    ellipse(x,y,25,25);
    
}
function greenRect(){
    fill(0,255,1);
    x = 200;
    y = y+= 3;
    rect(x,y,100,height);
}
function backgroundColor(){
    if(mouseIsPressed && mouseY < 200){
        background(0,0,255);
    }
    else if(mouseIsPressed && mouseY >= 200){
        background(255,255,0);
    }
    
    if(y>height){
        y = 0 -height;
    }
}

function redCircle(){
    noStroke();
    fill(255,0,0);
    ellipse(mouseX,mouseY,10,10);
}

function circles(yRow){
    var xCircle = 40;
    for(var i =0; i<10; i++){
        noStroke();
        ellipse(xCircle, yRow, sizes[i], sizes[i]);
        xCircle += 50;
    }
}
function face(){
    noStroke();
    //face
    fill(255);
    ellipse(300,250,120,200);
    //eyes
    fill(0,0,255);
    ellipse(270,200,30,30);
    ellipse(340,200,30,30);
    //iris
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(270,200,10,10);
    ellipse(340,200,10,10);
    //mouth
    fill(random(50,255), random(0,255), random(75,255));
    rect(300,270,random(0,40),random(10,30));
    //blush
    fill(255,0,0,100);
    ellipse(270,250,20,30);
    ellipse(340,250,20,30);
    //hair
    fill(132, 79, 0);
    triangle(300, 150, 280, 160, 150, 155);
}
function lines(){
    var i = 0;
    var yLine = 50;
    while(i<10){
        stroke(255);
        line(100,yLine,500,50);
        i++;
        yLine += 50;
    }
}