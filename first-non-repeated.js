function firstNonRepeated(s) {
    const arrS = Array.from(s);
    let arrUnicDouble;

    debugger
    for (const element of arrS) {
        if (arrS.indexOf(element) === arrS.lastIndexOf(element)) {
            arrUnicDouble = element;
            break
            
        }
        if(arrUnicDouble == undefined){
            arrUnicDouble = null
        }
    }
    return arrUnicDouble
}
const string = 'tesa';

const result = firstNonRepeated(string);

console.log(result);

