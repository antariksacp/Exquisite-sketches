var canvas;

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('display', 'block');
	canvas.position(0, 0);
	strokeWeight(10);
	stroke(0);
}

//function draw(){
	//if (mouseIsPressed) {
	//	line(pmouseX, pmouseY, mouseX, mouseY);
	//}
//}

function touchMoved() {
	noStroke();
	fill(random(mouseX), random(mouseY), 112);
	rect(mouseX, mouseY, 20, 20);
	//line(pmouseX, pmouseY, mouseX, mouseY);
  //ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
