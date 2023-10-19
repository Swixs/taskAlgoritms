function highAndLow(numbers) {
    let arr1 = Array.from(String(numbers), Number);
    let arr =  arr1.split(",");

    return Math.max(...arr.map(value => parseFloat(value)))
}

// метод массива Math.max который выводит большее число из массива 

const test = "1,14,3";

console.log(highAndLow(test));
