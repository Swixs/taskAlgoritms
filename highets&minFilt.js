function highAndLow(numbers) {
    let arr = numbers.split(' ');

    let resultArr = [];
    
    let number = arr.sort(function (a, b) { return a - b; });
    // используем метод массива sort который создает массив от минимального значения до максимального
    resultArr.push(number[number.length - 1], number[0])

    return resultArr.join(' ')
}
