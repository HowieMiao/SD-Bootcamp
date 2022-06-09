const readline = require('readline');

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

function generateRandom(min, max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}

async function greeter(){
    let input;
    let num = (Math.floor(Math.random()*100));
    let lowBound = 0;
    let highBound= 100;
    let guessed = false;
    while(!guessed){
        console.log("My Guess is " + num);
        let input = await ask ("Is it correct? (Y), or not (N)?\n");
        if(input.toUpperCase() == 'Y'){
            console.log("You number was " + num + "!");
            guessed = true;
        }
        else if(input.toUpperCase() == 'N'){
            let input = await ask ("Is it higher (H), or lower (L)?\n");
            if(input.toUpperCase() == 'H'){
                lowBound = num;
                num = generateRandom(lowBound,highBound);
            }
            else if(input.toUpperCase() == 'L'){
                highBound = num;
                num = generateRandom(lowBound,highBound);
            }
            else{
                console.log("bad input, restarting");
            }
        }
        else{
            console.log("bad input");
        }
    }
    readlineInterface.close();
}

greeter();