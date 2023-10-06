let mango = 1;
let priceQuantityForOneMango;
let priceQuantity
debugger
function SumMultiplyMango(price, quantity) {
    if (quantity == 1) {
        priceQuantity = price * quantity;
    }
    if (quantity >= 2) {    
       let temp = price * quantity
       priceQuantity = Math.round(temp - ((price * quantity) / 3))
    }
    return priceQuantity
}

console.log(SumMultiplyMango(mango, 15))


// 3 = 2 6 = 4 9 = 6 

// --------- DONT WORK 