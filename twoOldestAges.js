const twoOldestAges = (arr) => {
  let temp;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } 
      if(arr[i] < arr[j]){
        temp = arr[j]
      }
    }
  }
  console.log(arr.pop())
  console.log(arr.pop())
};

twoOldestAges([100, 201, 3, 4, 5, 89, 10]);
