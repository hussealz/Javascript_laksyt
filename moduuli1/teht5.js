function checkLeapYear() {
    const vuosi = parseInt(prompt("Kerro vuosiluku:"));

    let tulos;
    if (vuosi % 400 === 0) {
        tulos = `${vuosi}  on karkausvuosi`;
    } else if (vuosi % 100 === 0) {
        tulos = `${vuosi} ei ole karkausvuosi`;
    } else if (vuosi % 4 === 0) {
        tulos = `${vuosi} on karkausvuosi`;
    } else {
        tulos = `${vuosi} ei ole karkausvuosi`;
    }

    document.getElementById("result").innerText = tulos;
}

checkLeapYear();
