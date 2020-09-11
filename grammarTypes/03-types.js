/*
* *********
! TYPES
* *********

? Data and Structure Types
    - Primitive Data Types:
        - boolean
        - undefined
        - number
        - string
            - bigInt*
            - symbol*
    - null
    - Object
    - Function   
*/

//? BOOLEANS
// A boolean has two possible values: true and false

let on = true;
let off = false;

console.log(on);

//? NULL
// A null value is an empty value.  Think of it as an empty containter that has space to fill.

let empty = null;
console.log(empty);

//? UNDEFINED
// No value has been assigned to a container
let undef = undefined;
console.log(undef);
let password;
console.log(password);

/* 
    - Null is like a container with nothing in it.
        -Null you can trust as being zero.  Undefined, you cannot trust as being zero.
    - Undefined is when a variable has never been set, or hasn't been created yet.
*/

//? NUMBERS
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //15 9's
console.log(precise);

let rounded = 9999999999999999; //16 9's
console.log(rounded);
//JS gives us space for 15 9s before rounding up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);
//JS rounds out at a certain number, so if math is needed, be aware.

let whatIf = (0.2 *10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//? STRINGS
// Strings represent text and are wrapped in either single or double quotes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ);

//? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

// We can use an operator called 'typeof' that returns a string that tells us exactly what our variable "type" is.
console.log(typeof addThese);
console.log(typeof addTheseAlso);


let stringToNumber = Number('1150');
console.log(stringToNumber);
console.log(typeof stringToNumber);

//? OBJECTS
/*
    - Objects are used to store many values instead of a singular value.
    - Consider these as a collection of various properties.
    - denoted by curly brackets: {}
*/

let frodo = {
    //1    //2
    race: 'hobbit', //string
    rings: 1, //number
    hasSting: true //boolean
}


// 1: Key
// 2: Value

console.log(frodo);
console.log(typeof frodo);

//? ARRAYS
/*
    - Containers that hold a list of items.
    - denoted by square brackes: []
    - all items are withing the square brackets.
    - regardless of datatype, each item is separated by a comma.
    - !! arrays are an OBJECT datatype !! (and not a datatype of their own)
*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);

//? ADDITION vs CONCATENATION
/*
    - JS sees the "+" symbol in two different ways.
        - When combined with numbers, uses built-in math functionality.
        - When combined with strings, it ignores the math and concatenates the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Arthur';
let lastName = 'Pendragon'
let houseNumber = 1150;
let street = 'Royal Mile Court';
let city = 'Camelot';
let state = "Sussex";
let zipcode = 46122;
console.log(houseNumber, street, city, state, zipcode);

//? STRING Properties
/* 
    - strings have properties, or the qualities associated with that string.
    - the length of a string is a property.
*/

let myName = 'Ryan';
console.log(myName.length);

//? STRING Methods
/* 
    - methods are tools that can help us manipulate our data.
*/

let myNameIs = 'Ryan';
console.log(myNameIs.toUpperCase());
console.log(myNameIs.toLowerCase());
