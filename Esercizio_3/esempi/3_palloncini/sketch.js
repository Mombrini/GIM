let posizioneY
let posizioneX
let velX
let velY

function setup()
{
	createCanvas(800, 600)
	posizioneX = width/3
	posizioneY = height/2
	velX = 1
	velY = 1
	background(255, 200, 20)
}

function draw()
{
	noStroke()
	//fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255), 0)

	const r = (sin(frameCount * 0.031) + 1) * 127.5
	const g = (cos(frameCount * 0.032) + 1) * 127.5
	const b = (sin(frameCount * 0.033) + 1) * 127.5
	fill(r, 0, b) 

	const d = sin(frameCount * 0.06) * 60 + 70

	ellipse(posizioneX, posizioneY, d, d)
	//ellipse(width - posizioneX, posizioneY, d, d)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	//if (posizioneX >= width) posizioneX = 1 
	//if (posizioneY >= height) posizioneY = 1 

	if (posizioneX >= width || posizioneX <= 0) velX = -velX
	if (posizioneY >= height || posizioneY <= 0) velY = -velY
}

function keyPressed()
{
	if (key == 's') save("pong.png") 
}