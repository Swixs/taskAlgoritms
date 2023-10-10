function squareDigits(num) {
    let numStr = Array.from(num.toString());
    let result = [];
    for (let i = 0; i < numStr.length; i++) {
       let digit = numStr[i] * numStr[i]
       result.push(digit);
    }

    result = result.join('');
    result = parseInt(result);


    return result;
}
const numTest = 3212;
console.log(squareDigits(numTest));
// )