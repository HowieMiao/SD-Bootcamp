// include the library
const readline = require('readline');
// create an "interface", using STDIN and STDOUT
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
// OUTPUTs a question, and waits for INPUT
async function echo() {
    console.log("Starting program...");
    let message = await ask("Say something, and I will echo!\n> ");
    console.log("You wrote:\n" + "=> " + message);
    console.log("Program complete...");
    process.exit();
  }
  // call the "echo" function
  echo();