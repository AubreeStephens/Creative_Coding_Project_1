var ball1;
var r= 255;
var g= 140;
var b= 101;
var drop1;
var drop2;
var dot;
var fill;
var ball2;
var dot2;
var drop3;
var ball3;
var dots= [];
var xoff1=0.0;
var xoff2=0.01;
var xincrement= 0.01;
var yoff=0.0;
var yincrement= 0.02;

// Obstrcutions: one shape, vary scale within one shape, different color/size balls dropping opacity filling screen, check edges where ball randomly pkcks different location, move scale in background
function setup() {

createCanvas(600, 400);
    
ball1= new Ball(width/2, 0, 20, 2, 255, 140, 101);// start ball at 100, with size of 20 pixels

for (var d=0; d<20; d++){ //setting up for array of dots
    dots[d]= new Jiggle (d, 0, 20+d, 100);
}

//drop1= new Square (50, 25);//initialize drop 1 object
//drop2= new Square (random(10, 30), 125);// initialize drop 2 object
/*
for (var i=0; i< width; i++) { //initialize dot object at bottom of screen, radius 40 pixels, color white?
   dot= new Fallup (i, height, 40, 255);
}
ball2=new Ball(random(0,width/2), random(100), random(10,15),6, 140);
dot2= new Fallup(random(width), random(height), random(50,100), random(255));
drop3= new Square (random(100,200), random(255));
ball3= new Ball(random(width/2, width), height/2, 75, -2, 255);
for (var d=0; d<10; d++){ //setting up for array of dots
    dots[d]= new Fallup (d, width/2, 25, 100);
}*/
}



function draw() {
   
background (155);
drawBase();
//drawScale();
rotateScale();
//reverseDirection();


// main ball movement
        ball1.move();
        ball1.display();
        ball1.grow();
        ball1.redden();
        ball1.reverseColor();
        ball1.checkEdges();



var n= noise(xoff1)*width;
xoff1+=xincrement;
var o= noise(xoff2)* width;
xoff2+=xincrement;
var m= noise(yoff)*height;
yoff+=yincrement;

fill(0,255,0,100);
ellipse (n, m, 60, 60);
fill (0,0,255, 100);
ellipse(o, m*0.1, 40, 40);    




// drop movement, come in after frameCount 240
/*if (frameCount>240){
    drop1.update();
    drop1.display();
    //drop1.checkColor(); 
    //drop1.update();
    drop1.checkEdges(); 
}
//secondary drop movement, come in 120 frames later
    if (frameCount>360){
        drop2.update();
        drop2.display();
        drop2.checkEdges();
    }*/

    /*//dot movement
    dot.show();
    dot.moveup();
    dot.shrink();
    dot.checkSize();
    dot.checkforEdges();

//if mouse is in top half of screen, add another ball
    if (mouseY<height/2){
        ball2.move();
        ball2.display();
        ball2.grow();
        ball2.checkEdges();
        ball2.shrink();
    }
//if mouse is in bottom half of screen, blue dot falling up
    if (mouseY>height/2){
        dot2.show();
        dot2.moveup();
        dot2.checkforEdges();
    }
//if mouse is right half of screen and framecount over 500, add big square
/*    if (mouseX>width/2 && frameCount>500){
        drop3.update();
        drop3.display();
        drop3.checkEdges();
    }/
//if moouse is left half of screen and framecount over 500, add pulsating black ball on right
    if (mouseX<width/2&& frameCount>500){
        ball3.move();
        ball3.display();
        ball3.shrink();
        ball3.checkEdges();
        ball3.checkSize();
        //ball3.grow();
    }
if (frameCount%2===0){ //allow for strobe-like charachteristic of dots
for (var d=0; d<dots.length; d++){
    dots[d].show();
    dots[d].moveup();
    dots[d].checkforEdges();
}
}
*/
}
//draw stagnant scale
function drawBase(){
fill (0);
triangle (width/2, 0, 310, 350, 290,350); //scale backbone
triangle (width/2, 330, 400, height, 200, height); //scale base
}
function drawScale (){
    var x= 100;
    var y =50; 
    fill (0);
    rectMode(CENTER);
    rect(0, 0, 400, 5);// scale arm change this to rotate about
    /*line (x, y, x-y, x*2);// left arm left string -SOMETHING IS HAPPENING TO MY SCALE STRINGS
    line (x, y, x+y, x*2); //left arm right string
    line (x*5, y, x*5-y, x*2);// right arm left string
    line (x*5, y, x*5+y, x*2); //right arm, right string
    arc(x, x*2, x, x, 0, PI, CHORD);//left balance
    arc (x*5, x*2, x, x, 0, PI, CHORD);//right balance*/
        
}
function drawScaleLeft(){

line (-200, 0, -250, 200);// left arm left string -SOMETHING IS HAPPENING TO MY SCALE STRINGS
line (-200, 0, -150, 200); //left arm right string
arc(-200, 200, -100, -100, 0, PI, CHORD);//left balance 
}

function drawScaleRight(){
line (200, 0, 250, 200);// left arm left string -SOMETHING IS HAPPENING TO MY SCALE STRINGS
line (200, 0, 150, 200); //left arm right string
arc(200, 200, 100, 100, 0, PI, CHORD);//left balance 
}

function rotateScaleLeft(){
push();
translate (-200, 0);
rotate(radians(frameCount)*-1);
line (0, 0, -50, 200);// left arm left string -SOMETHING IS HAPPENING TO MY SCALE STRINGS
line (0, 0, 50, 200); //left arm right string
arc(0, 200, 100, 100, 0, PI, CHORD);//left balance 
pop();
}

function rotateScaleRight(){
   push();
    translate (200,0);
    rotate (radians(frameCount/2));
    line (0, 0, 50, 200);// left arm left string -SOMETHING IS HAPPENING TO MY SCALE STRINGS
    line (0, 0, -50, 200); //left arm right string
    arc(0, 200, -100, -100, 0, PI, CHORD);//left balance 
    pop();
}



function rotateScale(){
    push();
    rectMode(CENTER);
    translate(width/2, 50);
    background (155);
    rotate(radians(frameCount));
    drawScale();
    rotateScaleLeft();
    rotateScaleRight();
    pop();
    drawBase();
}
function reverseDirection(){
    if (frameCount>400 ||frameCount>1200){
     push();

    translate(10, 50);
    background (155);
    rotate(radians(frameCount)*-1);
    drawScale();
    pop();
    drawBase();   
    }
    
}


class Jiggle{
    constructor(x, y, r, c){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color= c;
    }
display(){
fill(this.color,this.color/3, this.color,100);
ellipse (this.x, this.y, this.r, this.r);

}
move(){

var n= noise(xoff)*width;
xoff+=xincrement;
var m= noise(yoff)*height;
yoff+=yincrement;

}
}

