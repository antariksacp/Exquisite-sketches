var canvas;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.style('display', 'block');
canvas.position(0,0);


}


//  function draw () {

    //if (mouseIsPressed) {
      //touchMoved();
  //  }

  //}
  //--------------------------------------------------------------
  function touchMoved () {
    noStroke();

    fill(113, random(mouseX), random(mouseY));

    ellipse(mouseX, mouseY, 30, 30);
    //ellipse(mouseX, mouseY,pmouseX, pmouseY);
    return false;
  }

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}
