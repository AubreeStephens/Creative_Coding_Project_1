var ballX= 100;
var ballY=0;
var speedY= 2;
var h =20;

function setup() {
 createCanvas(600, 400);

}

function draw() {
   
background (155);
    drawScale();
    displayBall();
    print(ballX);

function drawScale (){
    var x= 100;
    var y =50; 
    fill (0);
    triangle (width/2, 0, 310, 350, 290,350); //scale backbone
    triangle (width/2, 330, 400, height, 200, height); //scale base
    rectMode(CENTER);
    rect(width/2, 50, 400, 5);// scale arm
    line (x, y, x-y, x*2);// left arm left string
    line (x, y, x+y, x*2); //left arm right string
    line (x*5, y, x*5-y, x*2);// right arm left string
    line (x*5, y, x*5+y, x*2); //right arm, right string
    arc(x, x*2, x, x, 0, PI, CHORD);//left balance
    arc (x*5, x*2, x, x, 0, PI, CHORD);//right balance
    
}
function displayBall (){

    ellipse(ballX, ballY, h,h);
  speedY = speedY+0.1; // add some gravity
  ballY = ballY + speedY; 
    if (ballY>height/2 || ballY<0){ballY=height/2;}
}