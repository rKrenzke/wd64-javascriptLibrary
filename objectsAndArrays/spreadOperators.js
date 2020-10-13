/*
 * ********
 ! SYNTAX
 * ********
 
 keyword varName = [...arrayName];
*/

 const nameOne = ['Ryan', 'Krenzke'];
 const nameTwo = ['Matt', 'McConnell'];
 const copiedNames = ['Adam', 'Emeigh', ...nameOne, ...nameTwo];
 console.log(copiedNames);

 const copiedNamesDiff = ['Adam', 'Emeigh', nameOne, nameTwo];
 console.log(copiedNamesDiff);

/*
    Since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array. This is so the values that were pulled out gets placed into our new array.

    ...arrName (if not within an array, this syntax will throw and error)

    - We can add to our original array without altering our copied array.
        - dependent on wdhat data types we are using.
*/

 nameOne.unshift('Mr');
 console.log('Altered: ', nameOne, 'Spread: ', copiedNames);

/*
 * ********
 ! NUMBERS
 * ********
*/

 console.log(Math.min(1, 5, -3));
 
 const prices = [10.90, 5.99, 3.99, 7.45];
 console.log(Math.min(prices)); //This will return 'NaN' because without the spread operator 'prices' is seen as an array (which is not a number), instead of the number values inside the array
 console.log(Math.min(...prices)); //The spread operator pulls elements out of the prices array to allow the min() method to work

/*
 * ********
 ! ...OBJECTS
 * ********
*/

 const persons = [
     {
         name: 'Lore',
         species: 'Android'
     },
     {
         name: 'Picard',
         species: 'Human'
     },
 ];

 const copiedPersons = [...persons];
 copiedPersons[0].location = 'starship';
 persons.push({name: 'Worf', species: 'Klingon'});
 console.log('Obj', persons, 'SO', copiedPersons);
 // We are only changing the original array, not 'copiedPersons'

/* 
    * PASS by VALUE
    - primitive variable = primitive value
        ex:
            let x = 10;
            let y = 'abc';
            let z = null;
    
    - JS stores to memory both variable and values:
        Variables   Values
            x          10
            y         'abc'
            z          null
        ex:
        let a = x;
        let b = y;
        console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'

    - Altering one wouldn't affect the previous
        a = 5;
        b = 'xyz'
        console.log(x, y, a, b) -> 10, 'abc', 5, 'xyz'

    * PASS by REFERENCE
    - 3 Data Types that are passed by reference: Array, Functions, and Objects
        - technically objects
        - non primitive variables are given a reference to the value - the reference points to the location in memory

        * pretend datatype : address - denoted by < >

        let arr = [];
        arr.push(1);

        - How our code would look in memory:

        VARIABLES   VALUES  ADDRESS     OBJECT
        arr         <#001>  #001        []
        arr         <#001>  #001        [1]

        let ref = [1];
        let refCopy = ref;

        - Memory:
        VARIABLES   VALUES  ADDRESS     OBJECT
        ref         <#001>  #001        [1]
        refCopy     <#001>  

*/

copiedPersons[0].name = 'Data';
console.log('Obj:', persons, 'SO:', copiedPersons);

/*
* *********
! ... & AVOIDING CHANGING BOTH THE ORIGINAL & COPIED ARRAY
* *********
*/

const comics = [
    {title: 'Spiderman', year: 1962}, {title: 'Detective Comics', year: 1939}
];

const copiedComics = comics.map(comic => ({
    title: comic.title,
    year: comic.year
}));

comics.push({title: 'Calvin and Hobbes', year: 1985});
console.log('Before Altering: ', copiedComics);
copiedComics[1].title = 'Detective Comics #27';
console.log('After Altering: ', comics, copiedComics);

class Polygon{
    constructor(numArr){
      this.numArr = numArr;
    }
    
    perimeter(){
      let p = this.numArr.reduce((total, amount) => total + amount)
        return p
    }
  }

  let newPolygon = new Polygon([3, 8, 3, 8]);
  console.log(newPolygon.perimeter());