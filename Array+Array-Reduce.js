function arrayPlusArray(arr1, arr2) {
    const arr = arr1.reduce((acc, cur) => acc + cur, 0)+ arr2.reduce((acc, cur) => acc + cur, 0)
    // с помощью метода массивов "reduce" мы добавляем все элементы между собой в массиве arr1, 
    // а после этого просто повторяем действие с массивом arr2 и  выводим это все 
    return arr
  }
  console.log(arrayPlusArray([1,2,3], [4,5,6]))