// Array che conterrà i gocce di pioggia
var pioggia = [];

// Funzione per creare una nuova goccia di pioggia
function nuovaPioggia() {
  var fiocco = {
    x: Math.random() * windowWidth, // Posizione orizzontale casuale
    y: -10, // Posizione iniziale sopra la finestra
    diametro: Math.random() * 10 + 10, 
    velocita: Math.random() * 30 + 30 // Velocità casuale
  };
  pioggia.push(fiocco);
}

function setup(){
	createCanvas(windowWidth, windowHeight)
    frameRate(30); // Imposta il frame rate a 30 frame al secondo

   	// Crea gocce
   	for (var i = 0; i < 1000; i++) {
    	nuovaPioggia();
  	}
}

function draw(){
	
	background(10,50,125)

	// Disegna e aggiorna le gocce
	for (var i = 0; i < pioggia.length; i++) {
    	var goccia = pioggia[i];

  
    	fill(255); // Colore bianco
    	noStroke();
      
    	ellipse(goccia.x, goccia.y, 1, goccia.diametro);

    	// Aggiorna la posizione d
    	goccia.y += goccia.velocita;

    	// Se la goccia esce dalla finestra, creane una nuova
    	if (goccia.y > windowHeight) {
          nuovaPioggia();
      		pioggia.splice(i, 1); // Rimuovi la goccia corrente dall'array
    	}
  	}

}