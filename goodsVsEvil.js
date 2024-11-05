function goodVsEvil(good, evil) {
  let arrPersonsGood = [1, 2, 3, 3, 4, 10];
  let arrPersonsEvil = [1, 2, 2, 2, 3, 5, 10];
  let resultGood = [];
  let resultEvil = [];

  let arr = good
    .split(" ")
    .map(Number);

  console.log(arr)

  let arr2 = evil
    .split(" ")
    .map(Number);

  for (let i = 0; i < arr.length; i++) {
    resultGood.push(arrPersonsGood[i] * arr[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    resultEvil.push(arrPersonsEvil[i] * arr2[i]);
  }

  let sumResultsGood = resultGood.reduce((acc, curr) => {
    return acc + curr;
  });
  let sumResultsEvil = resultEvil.reduce((acc, curr) => {
    return acc + curr;
  });

  if(sumResultsGood < sumResultsEvil){
    return "Battle Result: Evil eradicates all trace of Good"
  } else if (sumResultsGood > sumResultsEvil) {
    return "Battle Result: Good triumphs over Evil"
  } else if (sumResultsEvil === sumResultsGood){
    return "Battle Result: No victor on this battle field"
  }
}

goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0");
