function hamming(a, b) {
  if (a === b) {
    return 0;
  }

  let arr = a.split("");
  let arr2 = b.split("");

  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      temp.push(arr[i]);
    }
  }
  let result = temp.length;
  return result;
}

hamming("a", "b");
