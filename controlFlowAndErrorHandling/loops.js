/* 
    FOR LOOPS
 - Loops help us repeat a process without writing a lot of code

 We need to:
    1) Create an index
    2) Run a condition
    3) Change to the indexing variable (execution of condition)
*/

for(let i = 0; i <= 10; i++){
    console.log(i);
}

/* 
    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against 
            (index; condition; change index -> result)

            for(<create index variable>; <run condition>; <change index>){
                <return results>
                ***will continue until run condition is met***
            }
*/

for(let i = 2; i > -10; i -= 4){
    console.log(i);
}

let word = 'supercalifragilisticexpialidocious';
for(let i = 0; i < word.length; i++){
    console.log(word[i]);
}

/*
    FOR IN LOOPS
*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    hasSpeedway: true
};

for(info in city){
    console.log(info);
    console.log(city[info]);
    // console.log(city.name)
}
/*
    for(variable IN objects){
        <statement>
    }
*/

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list){
    console.log(list[item]);
    console.log(item);
}

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
//let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let name = 'piCard';
let fullName;

for(char in name){
    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
}

console.log(fullName);

/*
    FOR OF LOOP
    - In order to run a FOR OF loop, the "thing" must be numbered like an array.

    - *** Cannot use objects. Use arrays instead ***
    let object = {
        key: value,
        key: value,
        key: value
    };

    for(o of object){
        <breaks>
    }
*/

let indexArray = ['spot 1', 2, true, 'four'];
for(pos of indexArray){
    console.log(pos);
}

/*
    Quick Recap:
    - for loops: loops through a block of code until the computer reaches a specified number.
    - for in loops: loops through properties of an object.
    - for of loops: loops over iterable objects as an arrays and strings. *string can be accessed much in the same way as arrays.
*/