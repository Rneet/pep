

// 2.

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']; 
console.log(materials.map((material) => material.length)); 


// 3. Write an arrow function called square that takes a number as an argument and returns its square. 

const square = (value) => value * value;
const prompt = require("prompt-sync")();

const userInput = prompt("Enter a number to square:");
const number = parseFloat(userInput);
if (!isNaN(number)) {
    console.log(`The square of ${number} is ${square(number)}`);
} else {
    console.log("Please enter a valid number.");
}


// 4. Given an array of numbers, use an arrow function to create a new array that contains the squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].

const numbers = [1, 2, 3, 4, 5];
const squares = [];
for (let i = 0; i < numbers.length; i++) {
    squares.push(square(numbers[i]));
}
console.log(squares);


// 5. se an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh". 

const reverse = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


// 6. Crearw a chainable object using arrow functions that allows you to set a value and then add or multiply it by a number. For example: const result = chainable(5).add(3).multiply(2); //result should be 16

const chainable = (value) => {
    return {
        add: (num) => chainable(value + num),
        multiply: (num) => chainable(value * num),
        value: () => value
    };
}