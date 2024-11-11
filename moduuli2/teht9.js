function even(numbers) {
    let evenNumbers = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

let originalArray = [2, 7, 4];
let evenArray = even(originalArray);

console.log("Original array:", originalArray);
console.log("Even numbers array:", evenArray);
