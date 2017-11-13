class Ball{
    constructor(x, y, r, speed, red, green, blue, opacity){
    this.r= r;
    this.position= createVector(x, y); //x, y positions are parameters
    this.velocity= createVector(0, speed);// on y-speed
    this.topspeed=20; // max speed=20
    this.lowspeed= 1;// not sure if this line works- incorrect syntax?
    this.acceleration= createVector(0, 0.01); //small y acceleration
    this.red= red;
    this.green= green;
    this.blue= blue;
    this.opacity= opacity;
    }
  
  display(){// circle
          fill (this.red, this.green, this.blue, this.opacity);// use global variable for r, g, b
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
                if (frameCount% 30=== 0){this.green= this.green-i/50; // slowly decrement G value to zero-- making object redder
                print (g);}
                if (frameCount % 60=== 0){this.blue =this.blue-i/25;}// slowly decrement B value to zero-- reddning

            }

        }
        reverseColor(){// new code
            if (this.red>= 255 && frameCount>500){
                for (var i=0; i<30; i+=0.6){
                    this.red-=i/20;}
                }
            else if (this.red<0){
                this.red=- this.red
                this.red++;
            }
            for (var j=0; j<20; j+=0.5){
              if (this.green<0){ 
              this.green+=j/50;  
            }
        
}
            for (var k=0; k<30; k+=0.5){
                if (this.blue<0){
                    this.blue+=-k;
                }
            }
}
        shrink(){// decrease size of ball2
           this.r-=this.r/50;
        }
        checkSize(){// as ball shrinks, reset
            if (this.r<20){
                this.r*=2.5;
            }
        }

        opacity(){
            for (var i=0; i<50; i++){
            this.opacity+=i;
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