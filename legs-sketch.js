var canvas;

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('display', 'block');
	canvas.position(0, 0);
	strokeWeight(10);
	stroke(0);
}

function draw(){
	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}