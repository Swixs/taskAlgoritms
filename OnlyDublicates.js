function onlyDuplicates(str) {
  console.log(str);
  const arr = Array.from(str);
  let arrDuplicates = [];

  for (const element of arr) {
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
      arrDuplicates.push(element);
    }
    if (arrDuplicates == undefined) {
      arrDuplicates = null;
    }
  }
  if (arrDuplicates.length <= 0) {
    return ''
  }
  let temp = arrDuplicates.reduce((acc, curr) => {
     return acc + curr;
   }); 

  return temp;
}

console.log(onlyDuplicates("hgfefeiefcf"));
