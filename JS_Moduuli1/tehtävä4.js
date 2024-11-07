function sortStudent() {
    const name = prompt("Enter your name:");
    if (!name) {
        document.getElementById("result").innerText = "Please enter a valid name.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * 4) + 1;
    let house;

    if (randomNumber === 1) {
        house = "Gryffindor";
    } else if (randomNumber === 2) {
        house = "Slytherin";
    } else if (randomNumber === 3) {
        house = "Hufflepuff";
    } else {
        house = "Ravenclaw";
    }

    // Display the result
    document.getElementById("result").innerText = `${name}, you are in ${house}!`;
}
