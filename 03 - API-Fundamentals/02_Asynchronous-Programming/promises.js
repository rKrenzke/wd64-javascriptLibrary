/*
*Proper syntax for a promise:
    - new Promise( *executor* function (resolve, reject) {...});
*/

// Boolean declaration
var amIGood = true;

// Promise
var iCanHasGift = new Promise(function (resolve, reject){
    if(amIGood){
        var gift = {
            brand: 'HasMattelbro',
            item: 'Turbo-Man action figure'
        };
        resolve(gift);
    } else{
        var naughty = "You've made Santa's naught list, enjoy your coal!";
        reject(naughty);
    }
});

// Promise call
var checkTwice = function (){
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
            // output: {brand: 'HasMattelbro', item: 'Turbo-Man action figure'}
        })
        .catch(function (error){
            // naughty list = coal
            console.log(error);
            // output: "You've made Santa's naughty list, enjoy your coal!"
        })
};

// checkTwice();

// 2nd promise
var playDate = function (gift) {
    var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

    return Promise.resolve(message); 
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts'); // log after
}

checkTwice()