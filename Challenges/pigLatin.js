/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

function translator(word){
    let wordArr = word.split(" "); //split() will create an array of strings from one string, separating at spaces (" ")
    let vowels = ['a', 'e', 'i', 'o', 'u']; //create an array of vowels to check against for match in logic below
    //let specials = ['?', '!'];
    let newWord = "";   //initializing variable that will be the transformed version of each word
    let finalPhrase = ""; //initializing variable that will be our final phrase after adding each newWord
     
    for(element of wordArr){ //use a FOR loop to iterate over each word in the string array and run logic below
        if(element.length == 1){ //this initial IF conditional is to catch the single letter vowel words, which will break with only the logic below
            newWord = element + 'ay';
            finalPhrase += newWord + ' ';
        } else if (vowels.indexOf(element[0]) > -1){ //conditional that checks the first index value of our input word. If it is a vowel, execute the IF logic.
            newWord = element + 'ay';
            finalPhrase += newWord + ' ';
        } else {
            //let specialChar = element.match(/[?!]/g);
            let firstVowel = element.match(/[aeiou]/g); //match() creates an array of matching values, which we assign to a variable here. The 'g' flag means it will check for all matching values.
            let vowels = element.indexOf(firstVowel[0]); //then take the first index position in the new array (in this case, an array of vowels as they appear in our input word) and assign that as a variable (in this case, the index position of the first vowel in our input word).
            newWord = element.substring(vowels) + element.substring(0, vowels) + 'ay'; //if substring() only has one parameter, it will begin at that position and extract the rest of the string.  If substring() has two parameters, it will extract the string between these two indices.
            finalPhrase += newWord + ' ';
        }
    }      
    console.log(finalPhrase);
}

translator('Winter is coming');
