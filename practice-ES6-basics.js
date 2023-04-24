// Objective:

// In this assignment, you will demonstrate your understanding of ES6 basics in JavaScript by implementing a simple program that processes an array of numbers.
// You will use arrow functions, let and const, template literals, the map and filter array methods, the spread operator, and destructuring.

// Instructions:

// 1. Create two arrays of numbers called numbers1 and numbers
// 2. Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
// 3. Define an arrow function called square that accepts a number as an argument and returns the square of the number.
// 4. Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
// 5. Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
// 6. Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
// 7. Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
// 8. Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.

// req 1. Create two arrays of numbers called numbers1 and numbers
let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

// req 2 Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
let numbers = [...numbers1, ...numbers2];
// console.log(numbers); //testing

// req 3 Define an arrow function called square that accepts a number as an argument and returns the square of the number.
let square = (num) => {
  return num * num;
};

//console.log(square(2)); //testing

// req 4 Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
let squares = numbers.map((num) => square(num));
//console.log(squares); //testing

// req 5
let isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

//console.log(isEven(10)); //testing, shows true
//console.log(isEven(11)); //testing, shows false

// req 6 Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
let evenSquares = squares.filter((squares) => isEven(squares));
//console.log(evenSquares); //testing

// req 7 Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.

const [firstEvenSquare, secondEvenSquare] = evenSquares;
//console.log(firstEvenSquare); //testing
//console.log(secondEvenSquare);//testing

// req 8 Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.

console.log(
  `This is the original numbers array:${numbers}, this is the squares array: ${squares}, this is the evenSquares array ${evenSquares},
   and finally, this is the extracted even squares(firstEvenSquare and secondEvenSquare): ${firstEvenSquare}, ${secondEvenSquare}, respectively.`
);
