function charConcat(string) {
  const arrString = Array.from(string);
  let arrStringPop;
  let arrStringShift;
  let resultArr = "";
  if (string.length % 2 == 0) {
    debugger
    for (let i = 0; i < string.length / 2; i++) {
      arrStringPop = arrString.pop();
      arrStringShift = arrString.shift();
      resultArr = resultArr + arrStringShift + arrStringPop + `${i + 1}`;
    }
    return resultArr
  }

  if (arrString.length % 2 != 0) {
    // arrStringSlice = Math.floor(arrString.length / 2 + 1)
  

    arrStringSplice = arrString.splice(Math.floor(arrString.length / 2), 1);



    for (let i = 1; i < string.length / 2; i++) {
      arrStringPop = arrString.pop();
      arrStringShift = arrString.shift();
      resultArr = resultArr + arrStringShift + arrStringPop + `${i}`;
    }
    return resultArr
  }
}

const stringArr = "codewars";

const result = charConcat(stringArr);

console.log(result);