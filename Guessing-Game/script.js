let guessCount = 0;
let gameLost = false;
let numberToGuess = (getRandomNumber(1,10));

function getRandomNumber(min, max){
    return Math.floor(Math.random() * Math.floor(max));
}

while(!gameLost){
  let userinput = prompt('Guess a number between 1 and 10. Be careful, you only have three guesses!');
  let guess = parseInt(userinput);
  if(guessCount < 2){
    if(guess === numberToGuess){
      alert('Congrats, you guessed the number!');
      break;
    } else if(guess > numberToGuess){
      guessCount++;
      alert('Try a lower number');
    } else if(guess < numberToGuess){
      guessCount++;
      alert('Try a higher number');
    } else{
      alert('That answer is not within range. Try again');
      guessCount++;
    }
  } else{
    gameLost = true;
    alert('Sorry, you are out of guesses!');
  }
}

class Polygon{
  constructor(){
    this.numArr = ;
  }

}

let newPoly = new Polygon(1,2,3,4);
newPoly.perimeter();


let shoppingList = [
  ['eggs', 'milk', 'butter'],
  ['cleaner', 'trash bags', 'detergent'],
  ['thank you card', 'pens', 'gift wrapping'],
  ['shoes', 't-shirt', 'slacks']
];

let [dairy, cleaningSupplies, birthDay, clothes] = shoppingList;

shoppingList.push(...dairy, ...cleaningSupplies, ...birthDay, ...clothes);
console.log(shoppingList);

