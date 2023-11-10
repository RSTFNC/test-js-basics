function riempiArray(numeroElementi, valoreMinimo, valoreMassimo) {
	if (numeroElementi <= 0 || valoreMinimo >= valoreMassimo) {
		return [];
	}
	const arrayCasuale = [];
	for (let i = 0; i < numeroElementi; i++) {
		const numeroCasuale = Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) + valoreMinimo;
		arrayCasuale.push(numeroCasuale);
	}
	return arrayCasuale;
}
function contaPariDispari(array) {
	let pari = 0;
	let dispari = 0;
	for (const numero of array) {
		if (numero % 2 === 0) {
			pari++;
		} else {
			dispari++;
		}
	}
	return { pari, dispari };
}
const numeroElementi = 20;
const valoreMinimo = 1;
const valoreMassimo = 100;
const arrayCasuale = riempiArray(numeroElementi, valoreMinimo, valoreMassimo);
console.log(arrayCasuale);

const conteggio = contaPariDispari(arrayCasuale);
console.log("Numeri Pari:", conteggio.pari);
console.log("Numeri Dispari:", conteggio.dispari);
