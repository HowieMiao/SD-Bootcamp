let inputS = "tEST123";

function capitalize(inString){
    let firstLet = inString.slice(0,1); 
    let restWord = inString.slice(1, inString.length);
    // console.log(firstLet);
    // console.log(restWord);
    let newFirst = firstLet.toUpperCase();
    let newRest = restWord.toLowerCase();
    let newWord = newFirst + newRest;
    return newWord;
}

console.log(capitalize(inputS));