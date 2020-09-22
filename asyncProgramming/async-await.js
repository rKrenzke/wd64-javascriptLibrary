//! Async/Await
/*
    - Allows us to program in a synchronous manner while still allowing code to run in the background.
    - Makes our site as responsive as possible.
*/

//? Async Function (syntax)
/*
    - Allows us to make a normal function asynchronously. Can use "await"
    - Must use the async keyword at the beginning of the function declaration
*/

async function myFunc(){
    //await...
}

const myAsyncFunc = async () => {
    //await...
}

const newFn = () => {
    // await (provides a syntax error because async is not declared)
}

async function fn (){
    return 'hello';
}

fn().then(console.log);

fn().then(dataFromAsyncFunc => {
    console.log(dataFromAsyncFunc);
})

//? Await
// Pauses at each await expression

// Chaining .then() together returns a promise (resolve/reject) and is know as method chaining.
fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

const request = async () => {
    const response = await fetch('https://random.dog/woof/json');
    const json = await response.json();
    return json;
}

request().then(json => {
    console.log(json);
})
