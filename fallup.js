class Fallup{
     constructor (x, y, r, c){
        this.x= x; 
        this.y= y; 
        this.rad= r;
        this.speed= 5;
        this.fill= c;
     }
     show(){ // ellipse-- supposed to have a color, can't figure it out
        ellipse (this.x, this.y, this.rad, this.rad);
        fill (0, 0, this.fill, 150);
     }
     moveup(){// move up 5 pixels at a time
        this.y-=this.speed;
     }
     shrink(){// decrement the radius
        this.rad-= this.rad/100;
     }

    checkSize(){ //makes dot pop like a kernel
        if (this.rad<10){
            this.rad=30;
            this.rad+= this.rad/10;
        }
    }
     checkforEdges(){ // if it's less than y, reset at bottom at some random x location
        if (this.y<0){
            this.y= height;
            this.x= random(width);  
          }      

     }
}