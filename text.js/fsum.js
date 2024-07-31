// Write a JavaScript function to calculate the sum of two numbers.
/*let a = 5;
let b = 2;
var c = a+b;
console.log(c);*/
function sumOfTwoNumbers(4, 5) { 
    return 4 + 5; 
  } 
 
// Write a JavaScript program to find the maximum number in an array.
/*function LargestElement(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
    }

    return Math.max.apply(null, arr);
}
const arr = [22, 65, 1, 39];
console.log("Largest in given array is " + LargestElement(arr));
*/

function largest(arr) {
    let i;
    let max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}
let arr = [22, 65, 1, 39];
console.log("Largest in given array is " + largest(arr));

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
 // program to check if the string is palindrome or not

function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ');
checkPalindrome(string);
 // object How do you create an object using prototypal inheritance in JavaScript?
 let person = {
    name: 'John',
    age: 30,
    greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
    };
    let employee = Object.create(person);
    employee.jobTitle = 'Software Developer';


