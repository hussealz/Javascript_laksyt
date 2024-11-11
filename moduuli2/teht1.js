
let numbers = [];

for (let i = 0; i < 5; i++) {
    let number = prompt("Enter a number:");
    numbers.push(Number(number));
}

console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
