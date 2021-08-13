function setup() {
    createCanvas(400,400);
  
    background(51)
  
  
  }
  
 function draw(){
if(keyIsDown(UP_ARROW)){

  background("RED")
}

if(keyIsDown(LEFT_ARROW)){

  background("BLUE")
}

if(keyIsDown(RIGHT_ARROW)){

  background("WHITE")
}

if(keyIsDown(DOWN_ARROW)){

  background("ORANGE")
}
 }




