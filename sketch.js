var ball1;
var r= 255;
var g= 140;
var b= 101;
var drop1;
var drop2;
var bugs= [];
var dim;
var dot;
var fill;

//var ball2;
//var balls=[];


function setup() {
 createCanvas(600, 400);
 //background(150);
//ball= new ball();

//for (var i= 0; i<50; i++){
  //  var l =i;
    //var m =i;
    //var n= i+2;
   //bugs= new Clutter(l, m, n);
//}
    //bugs= new Clutter (l, m, n);
for (var i=0; i< width; i++) {
   dot= new Fallup (i, height, random(10,30), 0);
}
    
ball1= new Ball(width/2, 0, 20, 2);// start ball at 100, with size of 20 pixels
//ball2= new DropBall(500,50);
drop1= new Square (50);
drop2= new Square (random(10, 30));
dim= width/2;


}

/*    for (var x=0; x<width; x+=20){
        balls.push(new Ball(x,0,10,1));
    }*/


function draw() {
   
background (155);
    drawScale();
    //for (var i=0; i<balls.length; i++){
        //balls[i].move();
        //balls[i].display();
        //balls[i].checkEdges();
    //}

        ball1.move();
        ball1.display();
        ball1.grow();
        ball1.redden();
        ball1.checkEdges();

if (frameCount>240){
    drop1.update();
    drop1.display();
    //drop1.checkColor(); 
    //drop1.update();
    drop1.checkEdges(); 
}
    if (frameCount>360){
        drop2.update();
        drop2.display();
        drop2.checkEdges();
    }

    dot.show();
    dot.moveup();
    dot.checkforEdges();

    //drawGradient(width/2, height/2);

 // for (var i=0; i<bugs.length; i++){
    //bugs[i].display();
 // }  
    //}
   // ball1.move();
   // ball1.display();
    //ball2.move();
   // ball2.display();
   // print (this.y);
    //this.y++;
   //ball.move();
    //ball.display();
}

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

class Clutter{
    constructor (x, y, r){
        this.x= x;
        this.y= y;
        this.r= r;
    }
    display(){
        ellipse(this.x, this.y, this.r, this.r);
        fill (0,255,0);
        noStroke(0);
    }
}
class Fallup{
     constructor (x, y, r, c){
        this.x= x; 
        this.y= y; 
        this.r= r;
        this.fill= c;
        this.speed= 5;
     }
     show(){
        ellipse (this.x, this.y, this.r, this.r);
        fill (this.fill);
        noStroke();
     }
     moveup(){
        this.y-=this.speed;
     }
     checkforEdges(){
        if (this.y<0){
            this.y= height;
            this.x= random(width);  
          }      

     }
}

/*function drawGradient(x, y){
    colorMode(HSB, 360,100,100);
    ellipseMode(RADIUS);
    var radius= dim/2;
    var h= random(0,360);
    for (var r= radius; r>0; --r){
    fill (h, 90, 90);
    ellipse(x, y, r, r);
    h= (h+1)%360;
}
}*/
function mousePressed (){
    dim=width/2;
    //drawGradient(width/2, height/2);
}
function keyPressed(){
    dot.show();
    dot.moveup();
    dot.checkforEdges();
  }  

    
/*function DropBall(tempX, tempDiameter){
   this.x=tempX; //x position must be passed
    this.diameter=tempDiameteter; //size must be passe
    this.y= 0;//start at top
    this.speed= random (10,20); //pick a random speed
    
    //move the ball by random speed
    this.move= function (){
        this.y +=this.speed;
    }

    // display ball
this.display= function(){
    noStroke();//no outline
    fill (255, 140, 101);//fill coral
    ellipse(this.x, this.y, this.diameter, this.diameter);// display an ellipse of x, y, and diameter. wasted 2 hours on code because I misspelled diameter :(
}
//want to ball to be "caught" inside scale, work on that
if (this.y===300){
    this.speed=0;
}
    else {
        this.speed=random(10,20);
    }
}*/
/*function displayBall (){

ellipse(ballX, ballY, h,h);
speedY = speedY+0.1; // add some gravity
ballY = ballY + speedY; 
if (ballY>height/2 || ballY<0){ballY=height/2;}
}*/

/*class Ball {
    var x; //location of ball
    var y;// location of ball
    var speed; // speed of ball 
    color c; 
    var r;// radius of ball
//var ballX= 100;
//var ballY=0;
//var speedY= 2;
//var h =20;


    Ball (){
        r= 8;// radius of 8 pixels, can vary this to do more
        x= random (width); //pick a random location in window
        y= -r*4; // begin before the viewing window
        speed =random (1, 5); // random speed between 1 and 5
        c= color(255, 140, 101); //start with crimson color- will vary this later
    
}

    function move(){
        y+=speed; //y position is dictated by speed 
}

// if it hits the height of the scale, stop it
    /*function reachedScale(){
        if (y > 200 +r*4){
            return true;
    }
        else {
            return false;
    }
}
    function display(){ // display ball with x and y position and radius *2, crimson color
        fill (255, 140, 101);
        noStroke();
        ellipse (x, y, r*2, r*2);
}
}*/