var ball1;
var r= 255;
var g= 140;
var b= 101;
var drop1;

//var ball2;
//var balls=[];


function setup() {
 createCanvas(600, 400);
//ball= new ball();

ball1= new Ball(width/2, 0, 20, 2);// start ball at 100, with size of 20 pixels
//ball2= new DropBall(500,50);
drop1= new Square (50);
    
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
    drop1.checkEdges();  
}
    
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
class Ball{
    constructor(x, y, r, speed){
    this.r= r;
    this.position= createVector(x, y);
    this.velocity= createVector(0, speed);
    this.topspeed=20;
    this.lowspeed= 1;
    this.acceleration= createVector(0, 0.01);
    }
  
  display(){
          fill (r, g, b);// use global variable for r, g, b
          noStroke;
          ellipse(this.position.x, this.position.y, this.r, this.r);
      }
    move (){//add velocity to position 
        var v;
        this.position.add(this.velocity);// add your velocity
        this.velocity.limit(this.topspeed);
        this.velocity.limit(this.lowspeed); //don't allow it to float backup
        this.velocity.sub(this.acceleration);// as it falls, slow down
        if (this.position.y<50){ // if velocity becomes negative, make it positive
            this.velocity.y=(this.velocity.y*-1)+1; // this makes for a really cool, ball bumping against top
        }
    }
    grow (){// work on growing size/ weight
        for (var i=0; i<3; i++){ //increment radius
            this.r+=i;}
            
        }
        redden(){// establish variable to intensify redness by taking away blue and green
            for (var i=0; i<20; i+=0.5){
                if (frameCount% 30=== 0){g= g-i/50; // slowly decrement G value to zero-- making object redder
                print (g);}
                if (frameCount % 60=== 0){b =b-i/25;}// slowly decrement B value to zero-- reddning

            }

        }

    checkEdges(){// if the ball gets to a certain diameter (ie. reaches edge), shrink it
        for (var i=0; i<10; i++){ 
        if (this.r> height*1.5){
                this.r-=i/1.5;
            }
        //if (this.r*2>width){ // if this bottom of circle reaches edge, keep it there.
            //this.position.y= height- this.r;
        }
    }
  } 
class Square{
constructor (r){
    this.r= r; 
    this.position= createVector (random(width), random(height));
    this.velocity= createVector(random(-5, 2), random(-5,2));
    this.acceleration= createVector (random(-0.3, 0.2), random (-0.2, 0.2));

}
update(){
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
}

display(){
    noStroke();
    fill(0, 255, 197, 100);
    rect(this.position.x, this.position.y, this.r, this.r);

}
checkEdges(){
    if (this.position.x>width){
        this.position.x=width;
        this.velocity.x*=-1;
    }
    else if (this.position.x<0){
        this.position.x= 0;
        this.velocity.x*=-1;
    }
    if (this.position.y>height){
        this.position.y=height;
        this.velocity.y*=-1;
    }
    else if (this.position.y<0){
        this.position.y=0;
        this.velocity.y*=-1;
    }
}
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