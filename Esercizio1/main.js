function analizzaTesto(testo) {
	// Esegui l'analisi del testo e crea un oggetto con le informazioni desiderate
	const lunghezzaTesto = testo.length;
	const parole = testo.split(" ").length;
	const caratteriSpeciali = testo.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/g);
	const numCaratteriSpeciali = caratteriSpeciali ? caratteriSpeciali.length : 0;

	// Crea l'oggetto con le informazioni raccolte
	const risultato = {
		lunghezzaTesto,
		parole,
		numCaratteriSpeciali,
	};

	return risultato;
}

// Esempio di utilizzo della funzione
const testoDiEsempio = "Questo è un esempio di testo! Contiene delle parole.";
const risultatoAnalisi = analizzaTesto(testoDiEsempio);

console.log(risultatoAnalisi);
