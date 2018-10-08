var canvas;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.style('display', 'block');
canvas.position(0,0);


}



  //--------------------------------------------------------------

function touchMoved() {
  noStroke();
  fill(random(mouseX), random(mouseY), 110);
    triangle(mouseX, mouseY, pmouseX+20, pmouseY, mouseX+25, mouseY);
    return false;
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}
