document.getElementById("comidaSelect").addEventListener("change", function() {
    temperatura(this.value);
});

function temperatura(Temperatura) {
    alert("¡Has elegido " + Temperatura + "!");
}
