function firstNonRepeatingLetter(s) {
    for(let i = 0; i < s.length; i++){
        let unic = s[i];

        if(s.toLowerCase().indexOf(unic.toLowerCase()) === s.toLowerCase().lastIndexOf(unic.toLowerCase())){
            console.log(unic);
        }
    }
    return ''; 
}

console.log(firstNonRepeatingLetter('aTraSS'))