const EvenOrOdd = (num) => {
    if(typeof num == "number" && num % 2 == 0){
        console.log("Even")
    } if( typeof num == 'number' && num % 2 !== 0){
        console.log("Odd")
    }
}

EvenOrOdd(-45)