const Cupcake = require('./cupcake')

class Shop {
    constructor(location, owner){
        this.location = location;
        this.owner = owner;
    }

    getLocation(){
        console.log(`This shop is at: ${this.location}.`);
    }

    getOwner(){
        console.log(`This shop is owned by ${this.owner}.`);
    }

    changeOwner(newOwner){
        this.owner = newOwner;
    }
}

class CupcakeShop extends Shop{
    constructor(location, owner, name){
        super(location, owner);
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    }

    bakeBatch(count, batter, icing, price){
        // Make COUNT cupcakes, add them to inventory
        for(let i = 0; i < count; i++){
            let newCupcake = new Cupcake(icing, batter, price); //these parameters are being passed in from the above bakeBatch()
            this.inventory.push(newCupcake);
        }
    }

    sellCupcake(){
        // Remove cupcake from inventory, increase cash by price of cupcake
        let soldCupcake = this.inventory.pop();
        this.cash += soldCupcake.price;
    }
}

let becsCakes = new CupcakeShop('Sawyer, MI', 'Bec', 'Sweets n Things');
becsCakes.bakeBatch(5, 'chocolate', 'vanilla', 10);
becsCakes.sellCupcake();
console.log(becsCakes.inventory);
console.log(becsCakes.cash);
