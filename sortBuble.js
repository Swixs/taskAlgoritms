const arr = [1, 3, 5, 10, 34, 35, 243, 34];
// 1, 3, 5
// -> 5, 3 ,1 
let temp;
function sortBuble(array) {
    debugger
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            
            } 
            if (array[i] < array[j]){   
                temp = array[j];
            }

        }

    }
    return array;
}

console.log(sortBuble(arr));