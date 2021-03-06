class Square{
constructor (r, c){
    this.r= r; 
    this.position= createVector (random(width), random(height)); // random position
    this.velocity= createVector(random(-5, 2), random(-5,2)); //random velocity betwen given values
    this.acceleration= createVector (random(-0.3, 0.2), random(-0.2, 0.2)); //random acceleration between given values
    this.fill= c;
}
update(){// increase speed and therefore position by some acceleration
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
}

display(){// square
    noStroke();
    fill(this.fill/25, this.fill*2, this.fill, 100);
    rect(this.position.x, this.position.y, this.r, this.r);

}
checkEdges(){ //if square hits a corner, redirect its velocity
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
}/*checkColor(){
    while (position.x<250 && position.y>200 || position.x>400 && position.y>200){
        rect (this.position.x, this.position.y, this.r, this.r);
        fill (0, 0, 255, 150);
        //update();
        //display();
        //checkEdges();
        }
    
    }*/
}