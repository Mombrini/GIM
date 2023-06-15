function setup(){
	createCanvas(windowWidth, windowHeight)
	frameRate(1);
}

function draw(){

	let h = hour()
	let m = minute()
	let s = second()
	let ms = new Date().getMilliseconds()

	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m
	let angolo_m = TWO_PI / 60 * m
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000

	background(random(255),random(255),random(255))

	// spostiamo l'origine in centro 
	translate(width/2, height/2)	
	scale (0.8)

	// bordo esterno
	fill(225,225,225)
	stroke(0)
	strokeWeight(3)
	ellipse(0, 0, 440, 440)
	noStroke()
	//fill(0)
	push()
	for (let i=0; i<60; i++) { 
	    if (s<i) {	
			fill(225,225,225)
	    } else {		
		   //if (s>=0 && s<15) {	
				fill(random(255), random(255), random(255))
			//} else if (s>=15 && s<30) {	
			//	fill(0, random(255), 0)
			//} else if (s>=30 && s<45) {	
			//	fill(0, 0, random(255))
			//} else {
			//	fill(random(255), 0, 225)
			//}	 
	    }
		if (i % 5 == 0) {
			ellipse(0, -190, 15, 50)
			rect(-1, -160, 1, 120)
		} else {		
			rect(-1, -160, 1, 120)
		}
		
		rotate(TWO_PI / 60)
	}
	
	pop()



	fill(0)

	// ruotiamo per le ore
	push()
	rotate(angolo_h)
	rect (0, 0, 12, -160)
	pop()	

	// ruotiamo per i minuti 
	push()
	rotate(angolo_m)
	rect (0, 36, 7, -225)
	pop()

	// ruotiamo per i secondi 
	fill(255, 0, 0)
	push()
	rotate(angolo_s)	
	rect (0, 40, 4, -180)
	triangle(0,-180,20,-140,-18,-140)
	//ellipse(0, -140, 40, 40)
	pop()

	// stroke(0, 0, 200)
	// line (0, -1000, 0, 1000)
	// line (-1000, 0, 1000, 0)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
