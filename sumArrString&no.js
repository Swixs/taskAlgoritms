debugger;

let arrNums = [];
let arrString = [];

const sumArr = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === "number") {
      arrNums.push(arr[i]);
    } else {
      arrString.push(arr[i]);
    }
  }
  arrString.pop();
  let temp = arrString.map(Number);

  let sum = arrNums.reduce((acc, curr) => {
    return acc + curr; // function for a sum all elements in array
  }, 0);
  let sumString = temp.reduce((acc, curr) => {
    return acc + curr;
  });

  console.log(sum - sumString);
};

sumArr([1, 2, 3, 4, 5, "100", 95, "18", 12]);



