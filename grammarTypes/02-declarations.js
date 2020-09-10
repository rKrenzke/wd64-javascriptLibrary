//Variables

console.log('Hello');
// The console log is a debugging tool

let a = 2;
/* 
- let : is our KEYWORD
- a : is our NAME of our variable
- = : is our ASSIGNMENT OPERATOR
- 2 : is our variable VALUE
*/

let b = 1;

console.log(a + b);

// RESTRICTIONS
/* 
    - a variable name must begin with a letter, underscore, or a dollar sign.
    - numbers may follow the above characters, BUT cannot come first.
    - javascript IS case sensitive - "hello" and "Hello", these would be different variables.
    - no spaces are allowed in variable names.
    - camelCase is the best practice for naming
*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollarSign = "Works";
// let 4startsWithNumber = "breaks";

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign);

/* 
*KEYWORDS

var, let, and const
    - var: 'old' keyword that stands for variable.  **We won't be using these as often, but is still a viable one to use.
    - let: 'new' keyword for variable.  Introduced with ES6 *newest version of ECMAScript, which is a standardization of JS.
    - const: also a 'new' keyword that declares an UNCHANGEABLE, or constant, variable.
*/

var variable = 'var variable';
let letVariable = 'let variable';

// DECLARATIONS AND INITIALIZATIONS

// Declarations are the LEFT SIDE of the assignment operator
// Initializations are the RIGHT SIDE of the assignment operator
let x = 10;

// const

let today = "Great!";
const efa = "Wonderful!";
console.log(today, efa);

today = "Awesome!";
console.log(today, efa);

// efa = "Super!"; will throw error because const variables cannot be changed