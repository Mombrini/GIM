function setup(){
	createCanvas(400, 400)
}

function draw(){


	// cmd+d per modificare i tre parametri assieme
	background(220)



	//funzione che disegna un punto: imput "point" e poi i 2 parametri 
	point(30, 60)
	point(35, 80)
	point(40, 50)

	//funzione che disegna un segmento: imput "line" e poi i 4 parametri dei due punti di inizio e fine del segmento
	stroke(0,0,0)
	line(60, 60, 200, 280)
	
	//funzione che disegna una superficie i primi due valori rappresentano il punto di inizio in alto a sx e poi le lunghezze dei due segmenti
	//(con option e freccette si spostano le stringhe di testo)
	fill(200,20,40)
	rect(120,120,90,90)
	fill(10,100,10,150)
	rect(200,200,50,50)

	//funzione che disegna un cerchio (primi due valori rappresenta il centro e poi diametro x e y) si puo usare anche "circle"
	noFill()
	ellipse(200,200,50,50)

	//funzione per triangolo 
	fill(255,255,0)
	strokeWeight(5)
	triangle(310,50,390,160,260,180)

	// per i colori dare i tre codici rgb max 255 e se si vuole mettere una trasparenza aggiungere il codice alfa quindi un quarto numero

}