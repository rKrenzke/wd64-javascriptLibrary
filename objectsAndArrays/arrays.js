/*
// ARRAYS
*/

//? POPULATING & REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

// JS counts starting at 0. So in this array, it would be 0-2
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.

//let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
//console.log(typeof students);
//console.log(students instanceof Array);  // the 'instanceof' operator is used to check the type of an object at run time. Remember that arrays are technically objects.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];

console.log(`Hello ${students[1]}!`);
console.log(`Hello ${students[6][2]}!`); // accessing a nested array

// ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Chocolate Cake', 'Hotdog'];

for(foodItem of food){
    console.log(foodItem);
}

// Add
food.push('Pizza'); // appends 'Pizza' to the end of our array
console.log('push: ', food);

// Remove and Insert
food.splice(1, 1, 'Bananas'); // Removes 'Shrimp' and add 'Bananas' => (position, how many to remove, what to add)
console.log('splice: ', food);

// Remove from end
food.pop(); // 'pop' removes the last item in an array
console.log('pop: ', food);

// Remove from start
food.shift(); // 'shift' removes the first element in an array
console.log('shift: ', food);

// Adds to the start
food.unshift('Popcorn', 'Steak'); // 'unshift' adds one or more elements to the beginning of the array
console.log('unshift: ', food);