function changeLoisirImage(numero) {
    var image;
    if (numero === 1) {
        image = "loisir1.png";
    } else if (numero === 2) {
        image = "loisir2.png";
    } else if (numero === 3) {
        image = "loisir3.png";
    } else if (numero === 4) {
        image = "loisir4.png";
    } else {
        image = "loisir.0.png";
    }
    document.getElementById("loisirImage").src = image;
}
