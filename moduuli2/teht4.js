let numbers = [];
let input;

do {
    input = parseInt(prompt("Enter a number (0 to stop):"));
    if (input !== 0) {
        numbers.push(input);
    }
} while (input !== 0);

numbers.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
numbers.forEach(number => console.log(number));

