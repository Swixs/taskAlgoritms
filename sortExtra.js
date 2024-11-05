const sortExtra = (arr) => {
  let temp;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] % 2 !== 0 && arr[j] % 2 !== 0) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        } else if (arr[i] < arr[j]) {
          temp = arr[j];
        }
      }
    }
  }
  console.log(arr)
};

sortExtra([5,8,6,3,4]);
