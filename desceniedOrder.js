function descendingOrder(n) {
    debugger
    let arr = Array.from(String(n), Number);
    let result = arr.sort((a, b) => b - a)

    // метод сортировки от большего к меньшему "sort"

    return parseInt(result.join(''))

    // метод parseInt используется для преобразорвания строки в число
}

console.log(descendingOrder(1544342))