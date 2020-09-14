/* 
// CONDITIONALS

//? FALSY VALUES:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"
*/

/* 
// IF
    - "If" something is true, do "this thing"

*/

let light = 'on';
if (light == 'on'){
    console.log('The light is on.');
};

let weather = 65;
if(weather < 70){
    console.log('Wear a jacket.');
};

let rain = true;
if(weather < 70 && rain != false){ //could also be written just as "&& rain"
    console.log('It is a beautiful day and will possibly rain');
};

/* 
// IF ELSE
    - If/Else statements allow us the ability to write out a chain of events.
*/

let today = 75;
if(today < 70){
    console.log('It is ' + today + ', wear a jacket.');
} else{
    console.log('It is ' + today + ', no jacket needed.');
};

/*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
*/

let name = 'Ryan';
if(name == 'Ryan'){
    console.log(name);
} else{
    console.log('Hello, what is your name?');
};


// for(i = 0; i <= 10; i++){
//     loopFunction(i);
// };

// function loopFunction(i){
//     console.log(i);
//     if(i % 2 == 0){
//         console.log('This number is even.');
//     } 
//     else {
//         console.log('This number is odd.');
//     };
// };


/* 
// ELSE IF
    - This is a contion that would be checked if the above condition was not met.
*/

let cookTime = 20;
if(cookTime === 45){
    console.log('Let us feast!');
} else if(cookTime >= 30){
    console.log(`It has only been ${cookTime} minutes. Wait another 5-15 minutes.`); //! when using interpolation, you must use backticks (``) instead of quotation marks
} else if(cookTime >= 20){
    console.log(`It has only been ${cookTime} minutes. Wait another 10-25 minutes.`);
} else{
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`);
};

// The end of the ELSE IF statement should have a simple "else" to finish it.

let age = 35;
if(age <= 17){
    console.log('Sorry, you\'re too young to do anything.' );
} else if(age >= 25){
    console.log('You can rent a car, drink, and vote!');
} else if(age >= 21){
    console.log('You can drink, and vote!');
} else if(age >= 18){
    console.log('You can vote!');
}; 

/* 
// TERNARIES
    - This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a simple line.
*/

let myName = 'Ryan';
// condition ? if true : else result
//    (1)                       (2)                                             (3)
myName === 'Ryan' ? console.log(`Hello, my name is ${myName}.`) : console.log(`No, sorry, my name is ${myName}.`);

/* 
    1: Condition
    2: True (if true)
    3: False (else)
*/

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
// let lampOn = false;
// let daytime = true;
// if(lampOn == true && daytime != true) {
//     console.log('The lamp is on during the night')
// } else if(lampOn != true && daytime != true) {
//     console.log('The lamp is off during the night')
// } else if(lampOn == true && daytime == true){
//     console.log('The lamp is on during the day')
// } else if(lampOn != true && daytime == true) {
//     console.log('The lamp is off during the day')
// } else {
//     console.log('What lamp?')
// }

let lampOn = false;
let daytime = true;
lampOn == true && daytime != true ? console.log('The lamp is on during the night') :
lampOn != true && daytime != true ? console.log('The lamp is off during the night') :
lampOn == true && daytime == true ? console.log('The lamp is on during the day') :
lampOn != true && daytime == true ? console.log('The lamp is off during the day') : console.log('What lamp?');

console.log(`The lamp is ${lampOn ? "on" : "off"} during the ${daytime ? "day" : "night"}`);

/* 
// SWITCH
    - executes a block of code depending on different cases.
*/

let instructor = 'Ing';

switch(instructor){
    case 'Ing' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Zach' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' :
        console.log(`${instructor} is a part of the Software Dev Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
}

instructor = 'Amanda';
switch(instructor){
    case 'Ing' :
    case 'Adam' :
    case 'Eric' :
    case 'Zach' :
    case 'Donovan' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' :
    case 'Amanda' :
    case 'Casey' :
    case 'Marquese' :
    case 'Michael' :
        console.log(`${instructor} is a part of the Software Dev Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);

}