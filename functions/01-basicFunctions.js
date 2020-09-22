/*
//FUNCTIONS
 - Functions are a process that we call upon to run an action
    - Take in input so that it can process it, modify it, or just respond to it
    - Returns a value (but not always)
    - Can be invoked (called upon) as often as we need
*/
// (1)    (2)
function sayHi(){
    console.log('Hi!');
}

//1. Keyword
//2. Name of the function and the parentheses for the parameter(s)


// (1)      (2)      (3)
function functionName() {
//      (4)
    return value
};
//  (5)
functionName();

/*
    - 1: KEYWORD "function"
    - 2: NAME of "functionName"
    - 3: PARAMETER (currently empty)
    - 4: STATEMENT (logic to process)
    - 5: INVOKE ("on" switch, or calling the function to run)
*/

// Function Declaration
// A chunk of code that performs a set action when it is invoked
function funcOne(){
    console.log('Statement Here');
}

funcOne();

// Function Expression
// Assigning a function to a variable is what is called an EXPRESSION

let first = function funcEColdMedina(){
    console.log('Second Statement');
};
first();

// Anonymous Function
// Anonymous functions are stored in memory but the runtime doesn't automatically create a reference to it.

let anon = function(){
    console.log('anon function');
}
anon();

// Parameters
// Allow us to accept information already declared.

function parameterFunc(num){
    console.log(num);
}
parameterFunc(2);
parameterFunc(9);

let returnedVal = 5;
parameterFunc(returnedVal);

let firstName = 'Jane';
let lastName = 'Doe';

function greeting(first, last){
    console.log(`Hi, ${first}! Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
}
greeting(firstName, lastName);