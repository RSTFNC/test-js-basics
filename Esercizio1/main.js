function analizzaTesto(text) {
	const originale = text;
	const minuscolo = text.toLowerCase();
	const senzaSpazi = text.trim();
	const numeroCaratteri = text.length;
	const invertita = text.split("").reverse().join("");
	const risultato = {
		originale,
		minuscolo,
		senzaSpazi,
		numeroCaratteri,
		invertita,
	};
	return risultato;
}
const testo = " Javasript é fantastico ";
const risultatoAnalisi = analizzaTesto(testo);
console.log(risultatoAnalisi);
