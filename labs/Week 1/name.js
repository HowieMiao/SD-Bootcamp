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

async function firstLast(){
    let first = await ask("What is your first name?\n");
    let last = await ask("What about your last?\n");
    console.log("Your full name is: \n" + "=> " + first + " " + last);
    process.exit();
}

firstLast();