document.addEventListener("DOMContentLoaded", function () {
	const bottoneInvio = document.getElementById("bottoneInvio");
	const testoUtente = document.getElementById("testoUtente");

	bottoneInvio.addEventListener("click", function () {
		const inputValore = testoUtente.value;
		if (inputValore.trim() !== "") {
			function analizzaTesto(testoUtente) {
				const originale = testoUtente;
				const minuscolo = testoUtente.toLowerCase();
				const senzaSpazi = testoUtente.trim();
				const numeroCaratteri = testoUtente.length;
				const invertita = testoUtente.split("").reverse().join("");
				const risultato = {
					originale,
					minuscolo,
					senzaSpazi,
					numeroCaratteri,
					invertita,
				};
				return risultato;
			}
			const risultatoAnalisi = analizzaTesto(testo);
			console.log(risultatoAnalisi);
		} else {
			alert("Inserisci del testo prima di inviare!");
		}
	});
});
