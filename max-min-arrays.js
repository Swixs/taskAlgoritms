function solve(arr) {
    let arrLength = Math.round(arr.length / 2);
    let resultArr = [];
    debugger
    for (let i = 0; i < arrLength; i++) {
        arr.sort((a, b) => b - a);
        resultArr.push(arr.shift())


        if (arr.length) {
            resultArr.push(arr.pop())
        }

    }
    return resultArr
}

const string = [91, 75, 86, 14, 10]

const result = solve(string);

console.log(result)