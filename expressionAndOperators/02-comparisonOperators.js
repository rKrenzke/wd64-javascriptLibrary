//Equal
'3' == 3;
console.log('3'== 3);

/* 
    - JS is helpful and does something known as coercion when comparing values
        - coercion is the process of converting a value from one type to another.
*/

//Strict Equal
console.log('3' === 3);
console.log(3 === 3);

//Not Equal
console.log('3' != 3); //false

//Strict Not Equal
console.log('3' !== 5);  //true

//Greater Than
3 > 2;

//Less Than
10 < 2;

//Greater Than or Equal To
3 >= 2;

//Less Than or Equal To
1 <= 2;

// And
2 && 3;

let num = 5;
if(num > 1 && num < 20){
    console.log("True")
} else{
    console.log("False")
}


// Or
2 || 3;
