function neutralise(s1, s2) {
    let arrMinus = Array.from(s1);
    let arrPlus = Array.from(s2);

    if (arrMinus.length !== arrPlus.length) {
        return false;
    }
    const arrEqually = arrMinus.map((element, index) => (element !== arrPlus[index] ? '0' : element));
    // методом мап мы проверяем все элементы в массивы и если они равны то записываем их в массив а если нет то записываем в массив 0;
    return arrEqually.join('')
}
console.log(neutralise("-+-+--", "+-+-++"))