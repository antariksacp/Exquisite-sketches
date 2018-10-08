var canvas;

function setup() {
canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0, 0);
strokeWeight(10);
}

/*
textSize(50);
fill(230);
text('HEAD', windowWidth/2, windowHeight/2);
}
*/


  //--------------------------------------------------------------


  function touchMoved () {
  stroke(color(0,0,255));
    line(mouseX, mouseY, pmouseX, pmouseY);
    //ellipse(mouseX, mouseY,pmouseX, pmouseY);
    return false;

  }
  function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
  }
