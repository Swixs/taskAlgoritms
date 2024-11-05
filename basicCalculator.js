function basicCalculator(signal, firstNum, secondNum) {
  if (signal === "-") {
    return firstNum - secondNum;
  } else if (signal === "/") {
    if (secondNum === 0) {
      return null;
    } else {
      return firstNum / secondNum;
    }
  } else if (signal === "+") {
    return firstNum + secondNum;
  } else if (signal === "*") {
    return firstNum * secondNum;
  } else {
    return null;
  }
}

console.log(basicCalculator("+", 3.2, 8));
