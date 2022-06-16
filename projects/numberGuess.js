const readline = require('readline');
let winCount = 0;
let numInput;
let guessCount;

const readlineInterface = readline.createInterface(
    process.stdin, 
    process.stdout
);

function ask(questionText) {
    // use a "Promise", which stands in for a future answer
    return new Promise((resolve, reject) => {
      readlineInterface.question(questionText, resolve);
    });
}

async function guesserRandom(){
    let lowBound = 0;
    let max= "a";
    while(isNaN(Number(max)) || Number(max <= 1)){ //ensure input is an integer
        max= await ask ("What do you want the max to be?\n");
        if(isNaN(Number(max)) || Number(max <= 1)){
            console.log("Bad input: Please enter in a number > 1");
        }
    }
    let highBound = max;
    let num = (Math.floor(Math.random()*max));
    let guessed = false;
    console.log("Please think of a number between 1 and " + max + " (inclusive)");
    while(!guessed){
        console.log("My Guess is " + num);
        let input = await ask ("Is it correct? (Y), or not (N)?\n");
        if(input.toUpperCase() == 'Y'){
            console.log("You number was " + num + "!");
            guessed = true;
            winCount++;
        }
        else if(input.toUpperCase() == 'N'){
            guessCount++;
            let input = await ask ("Is it higher (H), or lower (L)?\n");
            if(input.toUpperCase() == 'H'){  
                if(num > highBound){
                    console.log("The number has to be between " + lowBound + " and " + highBound + "\nYou're cheating!");
                    break;
                }
                lowBound = num;
                num = Math.floor(Math.random()*max);
            }
            else if(input.toUpperCase() == 'L'){
                if(num < lowBound){
                    console.log("The number has to be between " + lowBound + " and " + highBound + "\nYou're cheating!");
                    break;
                }
                highBound = num;
                num = Math.floor(Math.random()*max);
            }
            else{
                console.log("bad input, restarting");
            }
        }
        else{
            console.log("bad input");
        }
    }
    console.log("It took me: " + (guessCount + 1) + " guesses");
}


async function guesserOptimized(){
    let highBound = "a";
    let lowBound = 1;
    let guessed = false;
    while(isNaN(Number(highBound)) || Number(highBound <= 1)){ //ensure input is an integer
        highBound= await ask ("What do you want the max to be?\n");
        if(isNaN(Number(highBound)) || Number(highBound <= 1)){
            console.log("Bad input: Please enter in a number > 1");
        }
    }
    let num = Math.ceil(highBound/2);
    console.log("Please think of a number between 1 and " + highBound + " (inclusive)");
    while(!guessed){
        if(num == highBound || num == lowBound){
            console.log("The only possible answer is " + num + ". you're cheating!");
            break;
        }
        console.log("My Guess is " + num);
        let input = await ask ("Is it correct? (Y), or not (N)?\n");
        if(input.toUpperCase() == 'Y'){
            console.log("You number was " + num + "!");
            guessed = true;
            winCount++;
        }
        else if(input.toUpperCase() == 'N'){
            guessCount++;
            let input = await ask ("Is it higher (H), or lower (L)?\n");
            if(input.toUpperCase() == 'H'){
                lowBound = num;
                num = lowBound + Math.ceil(((highBound-lowBound)/2));
            }
            else if(input.toUpperCase() == 'L'){
                highBound = num;
                num = lowBound + Math.floor(((highBound-lowBound)/2));
            }
            else{
                console.log("bad input, restarting");
            }
        }
        else{
            console.log("bad input");
        }
    }
    console.log("It took me: " + (guessCount + 1) + " guesses");
}

async function guesserReverse(){
    let highBound = "a";
    let lowBound = 1;
    let guessed = false;
    while(isNaN(Number(highBound)) || Number(highBound <= 1)){ //ensure input is an integer
        highBound = await ask ("What do you want the max to be?\n");
        if(isNaN(Number(highBound)) || Number(highBound <= 1)){
            console.log("Bad input: Please enter in a number > 1");
        }
    }
    let num = Math.ceil(Math.random() * highBound);
    console.log("I've thought of a number between 1 and " + highBound + " (inclusive)");
    while(!guessed){
        let input = await ask ("What's your guess?\n");
        if(input < lowBound || input > highBound ){
            console.log("Please enter a number between " + lowBound + " and " + highBound);
        }
        else if(num == input){
            console.log("Correct!");
            guessed = true;
            winCount++;
        }
        else if(num > input){
            guessCount++;
            console.log("Incorrect!, " + input + " is lower than the answer!")
        }
        else if(num < input){
            guessCount++;
            console.log("Incorrect!, " + input + " is higher than the answer!")
        }
    }
    console.log("It took you: " + (guessCount + 1) + " guesses");
}

function menu(){
    console.log("Win Count: " + winCount);
    console.log("What game would you like to play?\n 1.) Guess the number but I guess random numbers\n 2.) Guess the number but I'm solve in [log2(n)+1]\n 3.) You guess my number\n 4.) Quit\n");
}

async function main(){
    menu();
    let numInput;
    while(numInput != "4"){
        numInput = await ask ("What would you like to play?\n");
        guessCount = 0;
        switch(numInput){
            case "1":
                await guesserRandom();
                menu();
                break;
            case "2":
                await guesserOptimized();
                menu();
                break;
            case "3":
                await guesserReverse();
                menu();
                break;
            case "4":
                console.log("Thanks for playing!\nYour total wins were: " + winCount);
                break;
            default:
                console.log("Bad input, try again");
                break;
        }
    }
    readlineInterface.close();
}

main();
