function uniqueNumbers() {
    let numbers = [];
    while (true) {
        let input = parseInt(prompt("Enter a number:"));
        if (numbers.includes(input)) {
            console.log("The number has already been given.");
            break;
        } else {
            numbers.push(input);
        }
    }
    numbers.sort((a, b) => a - b);
    console.log("All numbers in ascending order:", numbers);
}

uniqueNumbers();
