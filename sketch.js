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


function setup() {
createCanvas(600, 400);
    
ball1= new Ball(width/2, 0, 20, 2,0);// start ball at 100, with size of 20 pixels

drop1= new Square (50, 25);//initialize drop 1 object
drop2= new Square (random(10, 30), 125);// initialize drop 2 object

for (var i=0; i< width; i++) { //initialize dot object at bottom of screen, radius 40 pixels, color white?
   dot= new Fallup (i, height, 40, 255);
}
ball2=new Ball(random(0,width/2), random(100), random(10,15),6, 140);
dot2= new Fallup(random(width), random(height), random(50,100), random(255));
drop3= new Square (random(100,200), random(255));
ball3= new Ball(random(width/2, width), height/2, 75, -2, 255);
for (var d=0; d<10; d++){ //setting up for array of dots
    dots[d]= new Fallup (d, width/2, 25, 100);
}
}



function draw() {
   
background (155);
    drawScale();

// main ball movement
        ball1.move();
        ball1.display();
        ball1.grow();
        ball1.redden();
        ball1.checkEdges();
// drop movement, come in after frameCount 240
if (frameCount>240){
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
    }

    //dot movement
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
    if (mouseX>width/2 && frameCount>500){
        drop3.update();
        drop3.display();
        drop3.checkEdges();
    }
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

}
//draw stagnant scale
function drawScale (){
    var x= 100;
    var y =50; 
    fill (0);
    triangle (width/2, 0, 310, 350, 290,350); //scale backbone
    triangle (width/2, 330, 400, height, 200, height); //scale base
    rectMode(CENTER);
    rect(width/2, 50, 400, 5);// scale arm
    line (x, y, x-y, x*2);// left arm left string -SOMETHING IS HAPPENING TO MY SCALE STRINGS
    line (x, y, x+y, x*2); //left arm right string
    line (x*5, y, x*5-y, x*2);// right arm left string
    line (x*5, y, x*5+y, x*2); //right arm, right string
    arc(x, x*2, x, x, 0, PI, CHORD);//left balance
    arc (x*5, x*2, x, x, 0, PI, CHORD);//right balance
        
}

