/*
    ? ARROW FUNCTIONS
 - Arrow functions are expressional functions that can be simplified into one of two forms: CONCISE and BLOCK BODY.
 - The main goal is to generate shorter syntax for writing a function.


 * Arrow Functions also do NOT get hoisted.
*/

function regFunc(){
    console.log('Regular');
}

regFunc();

//      (1)     (2)(3)      (4)
let arrowFunc = () => console.log('Arrow Function');
arrowFunc();  // still need to invoke our fuction

/*
    1. *Arrow functions are always anonymous*
    2. Parameters are still capable of being injected.
        - if we only have one parameter, we techincally don't need the parens()
        - BUT if we are not passing any parameters, it is REQUIRED to denote ()
    3. This syntax tells JS that we are about to process a function.
    4. Within this format, JS assumes the return statement.
*/

// CONCISE vs BLOCK BODY

// Concise:
let cBody = (x, y) => console.log(x + y);
cBody(1,2);

let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`);

slightlyComplex(3,1);
slightlyComplex(1,5);

let concise = () => console.log('Concise practice. Concise does not use curly brackets');
concise();

let moreComplexConcise = (a, b) => a == 'pineapple' || b == 'ham'? console.log('Those are great pizza toppings') : console.log('No, ham and pineapple are the best toppings');
moreComplexConcise('green peppers', 'ham'); 

// Block:
// The 'return' keyword IS required. We also include the curly braces.
let blockArrow = (x,y) => {
    return `${x} are within a ${y}`;
}

console.log(blockArrow('We', "Block Body"));

let sampleBlock = x => {
    console.log(x);
}

sampleBlock(99);