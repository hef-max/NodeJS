// const coffeStock = require('./state');

// const makeCoffee = (type, miligrams) => {
//     if(coffeStock[type] >= miligrams){
//         console.log("Kopi berhasil dibuat!");
//     }else{
//         console.log("Biji kopi habis!");
//     }
// }

// makeCoffee("robusta", 80);

//ES6
import coffeeStock from './state.js';
 
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(coffeeStock);