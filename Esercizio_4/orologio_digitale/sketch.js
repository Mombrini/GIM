
// Array che conterrà i fiocchi di neve
var fiocchiDiNeve = [];

// Funzione per creare un nuovo fiocco di neve
function nuovoFioccoDiNeve() {
  var fiocco = {
    x: Math.random() * windowWidth, // Posizione orizzontale casuale
    y: -10, // Posizione iniziale sopra la finestra
    diametro: Math.random() * 10 + 5, // Diametro casuale
    velocita: Math.random() * 2 + 1 // Velocità casuale
  };
  fiocchiDiNeve.push(fiocco);
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	//createCanvas(larghezzaFinestra, altezzaFinestra);
    frameRate(30); // Imposta il frame rate a 30 frame al secondo

   	// Crea 100 fiocchi di neve iniziali
   	for (var i = 0; i < 100; i++) {
    	nuovoFioccoDiNeve();
  	}
}

// Calcola il tempo mancante fino a Natale
function tempoMancanteNatale() {
	// Data corrente
	var dataCorrente = new Date();
	
	// Anno corrente
	var annoCorrente = dataCorrente.getFullYear();
	
	// Data di Natale dell'anno corrente
	var dataNatale = new Date(annoCorrente, 11, 25);
	
	// Se Natale è già passato nell'anno corrente, allora consideriamo Natale dell'anno successivo
	if (dataCorrente > dataNatale) {
	  dataNatale = new Date(annoCorrente + 1, 11, 25);
	}
	
	// Calcola la differenza di tempo in millisecondi
	var differenzaTempo = dataNatale - dataCorrente;
	
	// Calcola il numero di giorni, ore, minuti e secondi mancanti
	var giorniMancanti = Math.floor(differenzaTempo / (1000 * 60 * 60 * 24));
	var oreMancanti = Math.floor((differenzaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutiMancanti = Math.floor((differenzaTempo % (1000 * 60 * 60)) / (1000 * 60));
	var secondiMancanti = Math.floor((differenzaTempo % (1000 * 60)) / 1000);
	
	// Restituisce un oggetto contenente i valori calcolati
	return {
	  giorni: giorniMancanti,
	  ore: oreMancanti,
	  minuti: minutiMancanti,
	  secondi: secondiMancanti
	};
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(){

	//let year = date.getFullYear();
	//let month = date.getMonth() + 1;
	
	let ora = hour() + ":" + minute() + ":" + second()

	var tempoMancante = tempoMancanteNatale();
	
	background(255,30,50)
	textSize(40)
	textFont("monospace")
	textAlign(CENTER, CENTER)
	fill(0,random(255),0)
	//text(ora, mouseX, mouseY)
	//text(Ladata, windowWidth/2, windowHeight/2)
	//text(ora, windowWidth/2, windowHeight/2)
	// Stampiamo il risultato
	let risultato = "Mancano\n\n\n" + tempoMancante.giorni + " giorni\n" + tempoMancante.ore + " ore\t" + tempoMancante.minuti + " min e\t" + tempoMancante.secondi + " sec\n a Natale.\n\n\n\n Affrettati a prendere i regali!!!!"
	text(risultato, windowWidth/2, windowHeight/2)
	
	sleep(500)

	// Disegna e aggiorna i fiocchi di neve
	for (var i = 0; i < fiocchiDiNeve.length; i++) {
    	var fiocco = fiocchiDiNeve[i];

    	// Disegna il fiocco di neve come un cerchio bianco
    	fill(255); // Colore bianco
    	noStroke();
    	ellipse(fiocco.x, fiocco.y, fiocco.diametro);

    	// Aggiorna la posizione del fiocco di neve
    	fiocco.y += fiocco.velocita;

    	// Se il fiocco di neve esce dalla finestra, creane uno nuovo
    	if (fiocco.y > windowHeight) {
      		nuovoFioccoDiNeve();
      		fiocchiDiNeve.splice(i, 1); // Rimuovi il fiocco di neve corrente dall'array
    	}
  	}

}