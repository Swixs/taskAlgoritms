function digitalRoot(n) {
  let arr = Array.from(String(n), Number); 
//  делаем массив из цифр
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// делаем сложение цифр с помощью reduce метода 

  if( sum >= 10){
   return digitalRoot(sum);
  }else {
    return sum
  }
  // делаем вопрос с помощью if/else равен или больше наш массив, если да то повторяем функцию, а если нет то выводим наш "sum"
}
const numTest = 456;
console.log(digitalRoot(numTest));




