function arrayDiff(a, b) {
    return a.filter((item) => !b.includes(item));
    // используем фильтр для создания нового массива с элементами которые прошли проверку 
    // следующим шагом будет метод includes для проверки содержит ли массив определенный элемент
}
const numTest = [1,2,2];
console.log(arrayDiff(numTest, [2, 2]));