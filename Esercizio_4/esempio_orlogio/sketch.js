function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
	let ora = hour() + ":" + minute() + ":" + second()
		
	//background(200)
	textSize(40)
	textFont("monospace")
	textAlign(CENTER, CENTER)
	fill(random(255),random(255),random(255))
	text(ora, mouseX, mouseY)
}