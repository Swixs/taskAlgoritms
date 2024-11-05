const rentCar = (days) => {
    const price = 40
    if(days !== 0){
        if(days >= 1 && days < 3){
           return price * days
        }
        else if(days >= 3 && days <= 6){
            return price * days - 20
        }
        else if(days >= 7){
            return price * days - 50
        }
    }
}

console.log(rentCar(10))