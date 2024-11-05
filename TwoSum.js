const twoSum = (arr) => {
  let temp = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      temp.push(arr[i]);
    }
  }
  temp.pop();

  let sum = temp.reduce((acc, curr) => {
    return acc + curr
  })

  console.log(sum)

};

twoSum([2, 3,1]);
