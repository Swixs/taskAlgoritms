// [a,b,a] [a,a,b]
//

const mergeOverplaingStrings = (firstString, secondString) => {
  let arr = [];
  if (firstString.length >= 1 && secondString.length >= 1) {
    for (let i = 0; i <= firstString.length - 1; i++) {
      if (firstString[i] !== secondString[i]) {
        arr.push(firstString[i]);
      } else if (firstString[i] === secondString[i]) {
        arr.push(firstString[i]);
      }
    }

    for(let i = 0; i <= secondString.length; i++){
        if(secondString[i] !== firstString[i]){
            arr.push(secondString[i])
        }
    }
  }
  console.log(arr);
};

mergeOverplaingStrings("abc", "aef");
