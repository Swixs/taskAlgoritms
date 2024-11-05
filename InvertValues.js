const invert = (arr) => {
  let reverseArr = [];
  if (arr.length === 0) {
    console.log([]);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        reverseArr.push(-arr[i]);
      }
    }
  }
  console.log(reverseArr);
};

invert([-1, -2, -3, -4, -9, 5]);

// ==================================

const invert2 = (arr) => {
  return arr.map(num => -num);
};

