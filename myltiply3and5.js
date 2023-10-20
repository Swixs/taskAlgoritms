function solution(number) {
    const arrN = [];
    const arrResult = [];
    for (let i = 1; i < number; i++) {
        arrN.push(i)
    }

    // цикл который делает массив из чисел меньше заданого числа

    for (let i = 1; i < arrN.length; i++) {
        if (arrN[i] % 3 == 0) {
            arrResult.push(arrN[i])
        }
        if (arrN[i] % 5 == 0) {
            if (arrResult[arrResult.length - 1] !== arrN[i]) {
                arrResult.push(arrN[i])
            }
        }
    }
    return arrResult.reduce((acc, cur) => acc + cur, 0)
}
