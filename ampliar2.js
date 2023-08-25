function ampliarImagem(img) {
	var ampliadaContainer = document.querySelector(".ampliada-container");
	var imgAmpliada = document.querySelector(".ampliada-image");
	imgAmpliada.src = img.src;
	ampliadaContainer.style.display = "flex";
	setTimeout(function() {
		ampliadaContainer.classList.add("visivel");
	}, 50);
}

document.querySelector(".ampliada-container").addEventListener("click", function() {
	this.classList.remove("visivel");
	setTimeout(function() {
		document.querySelector(".ampliada-container").style.display = "none";
	}, 300);
});


function mostrarMensagem(mensagem) {
	var elemento = document.getElementById("mensagem");
	elemento.innerHTML = mensagem;}
