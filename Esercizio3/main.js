document.addEventListener("DOMContentLoaded", function () {
	const bottoneInvio = document.getElementById("bottoneInvio");
	const testoUtente = document.getElementById("testoUtente");

	bottoneInvio.addEventListener("click", function () {
		const inputValore = testoUtente.value;
		if (inputValore.trim() !== "") {
			const nuovoParagrafo = document.createElement("p");
			nuovoParagrafo.textContent = inputValore;
			document.body.appendChild(nuovoParagrafo);
			testoUtente.value = "";
		} else {
			alert("Inserisci del testo prima di inviare!");
		}
	});
});
