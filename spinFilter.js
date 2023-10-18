function spinAround(turns) {

  if (turns.length === 0) {
    return 0
  }

  let arrLeft = [];
  let arrRight = [];
  const filter = turns.filter(function (i) {
    if (i === 'left') {
      arrLeft.push(i)
    }
  })
  const filterRight = turns.filter(function (i) {
    if (i === 'right') {
      arrRight.push(i)
    }
  })

  //используем функцию фильтр чтоб проверить равен ли елемент массива right или left 


  return Math.floor(Math.abs((arrLeft.length / 4) - (arrRight.length / 4)))
  // после используем Math.abs чтоб сделать все числа положительными, а после этого Math.floor для того, чтоб округлить число до пола

}

console.log(spinAround(['right', 'right', 'right', 'right', 'left', 'right']))