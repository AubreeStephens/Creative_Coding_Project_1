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