/*Reverse a String: Write a function that reverses a given string*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

/*Count Characters: Create a function that counts the number of characters in a string. */

function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("hello"));

/*Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence. */

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello peapole of earth"));

/*Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers. */

let arr = [1, 2, 4, 7, 8];
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax(arr));

/*Sum of Array: Create a function that calculates the sum of all elements in an array.*/

let arra = [1, 2, 4, 7, 8];
function findMin(arra) {
  return Math.min(...arra);
}
console.log(findMin(arra));

/*Filter Array: Implement a function that filters out elements from an array based on a given condition. */
let array = [1, 2, 4, 7, 8];

function sumArray(array) {
  return array.reduce((total, num) => total + num, 0);
}
console.log(sumArray(array));

/* Write a function to calculate the factorial of a given number. */

function factorial(n) {
  if (n < 0) return "Invalid";
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(-1));

/*Prime Number Check: Create a function to check if a number is prime or not. */

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));
console.log(isPrime(20));

/*Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net ) */

function fibonacci(n) {
  let seq = [0, 1];
  if (n === 1) return [0];
  if (n === 2) return seq;
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}
console.log(fibonacci(9));
