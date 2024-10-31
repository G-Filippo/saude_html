function mostrarDicas() {
    const dicasInfo = document.getElementById("dicas-info");
    if (dicasInfo.style.display === "none") {
        dicasInfo.style.display = "block";
    } else {
        dicasInfo.style.display = "none";
    }
}