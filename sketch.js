
function setup() {
  createCanvas(400,400);
  createSprite(200,200)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    background("red");
  }
}




