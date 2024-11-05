const stringUpper = (str) => {
    let arrStr = Array.from(str)

    let arr = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
    for(let i = 0; i < arrStr.length; i++){
        if(arrStr[i] !== arr[i]){
            return 0
        } else {
            return 1
        }
    }
    
  }
        
console.log(stringUpper('HELLO'))