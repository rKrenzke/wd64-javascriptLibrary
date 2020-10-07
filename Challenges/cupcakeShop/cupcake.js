// What should a cupcake have?
// Icing, Cake, Price

/*
* METHODS and FUNCTIONS are essentially the same thing.  METHODS are FUNCTIONS within CLASSES.
*/

class Cupcake{
    constructor(icing, cake, price){
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }

    getDescription(){
        console.log(`A ${this.icing} topped ${this.cake} cupcake for $${this.price}`);
    }
}

/*
* *******
! APIE
* *******
    A - Abstraction: Hide complicated detail and processes behind an easy interface
    P - Polmorphism: One interaction with many implementations (ex. string.length, array.length)
    I - Inheritence: Class heirarchy that share functionality and attributes
    E - Encapsulation: Data and functionality to manipulate that data are bundled together
*/

module.exports = Cupcake;