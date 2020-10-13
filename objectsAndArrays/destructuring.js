/*
* *********
! ARRAY DESTRUCTURING
* *********

    - allows us to unpack values from arrays or properties from objects.
    - similar syntax as array literals BUT is on the LEFT side of the assignment operator.
        - this defines what values to unpack
    - great for pullig info out of an array/object and assigning that data to it's own variable.
*/

const boardGames = ['Pandemic', 'Jaws', 'Smallworlds'];

//const gameOne = boardGames[0];

const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);

/* 
    - within the brackets (on left of assignment operator), we have our desired variables names. These conincide with each value within the array that is in the original variable.
*/

/*
* *********
! REST SYNTAX
* *********
    - Rest syntax looks exactly like spread syntax
     - Spread expands an array into its elements
     - Rest collects multiple elements and condenses into a single element
     - MUST be the last element defined when using array destructuring
*/

const hitchHikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}];

let [charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);
// Using the spread operator syntax like this is know as 'rest' syntax with Array Destructuring. Using it, we are packing up the REST of the values into a new array.

hitchHikersGuide.push('Marvin', 'Deep Thought', 'Zaphod Beeblebrox');
[charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(otherInfo);

[charOne, charTwo, , , ...otherInfo] = hitchHikersGuide;

console.log(charOne);
console.log(charTwo);
console.log('SKIPPED');
console.log(otherInfo);

/*
* *********
! OBJECT DESTRUCTURING
* *********
*/

// const game = {
//     title: 'Skyrim',
//     developer: 'Bethesda Game Studios',
//     platforms: ['PC', 'PS4', 'Xbox']
// };

// const {title, platforms} = game;
// console.log(`${title} is on ${platforms}`);

const games = [
    {
        title: 'Fallout 76',
        developer: 'Bethesda Game Studios',
        platforms: [
        'PC', 'PS4', 'XBoxOne'
        ]
    },
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: [
        'Nintendo Switch', 'Wii U'
        ]
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: [
        'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
        ]
    },
];

const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
console.log(titleOne);
console.log(devOne);
console.log(titleThree);

for({title, developer} of games){
    console.log(`${title} is developed by ${developer}`);
}

for({title, platforms} of games){
    for(p in platforms){
        console.log(`${title} is on ${platforms[p]}`);
    }
}
