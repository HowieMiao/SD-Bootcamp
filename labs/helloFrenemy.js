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

async function greeter(){
    let name = await ask ("Who are you?\n");
    if( name == "Enemy"){
        console.log("go away!");
    }
    else{
        console.log("hello, " + name);
    }
    readlineInterface.close();
}

greeter();
