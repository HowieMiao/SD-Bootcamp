// function test(){
// 	let var1 = 10;
// 	var1 += 2;
// 	return var1;
// }

// console.log(test());

/*
 strings
*/

let firstName = require("readline");

const rl = firstName.createInterface({
	input: process.stdin,
	output: process.stdout,
  });
  
rl.question("What is your name? ", await function (response) {
    console.log(`Oh, so your name is ${response}`);
    rl.close();
});

// console.log("titanic".toUpperCase());
// console.log("QUIETLY".toLowerCase());
// console.log("Java".repeat(10));
// console.log("berry".charAt(1));
// console.log("berry".charAt(0));
// console.log("banana".includes("nan"));
// console.log("banana".endsWith("ana"));
// console.log("blueberry".replace("blue", "black"));

// data type combination

// let num = 7;
// console.log(num + null);
// console.log(num + undefined);
// let string = "cat"
// console.log(string + null);
// console.log(string + undefined);

// function randomNum(min, max) {
// 	let range = max - min + 1
  
// 	return Math.floor(Math.random() * range) + min
// }

// console.log(randomNum(0,10));


let fName = "Howie";
let lName = "Miao";
let houseNumber = 4830;
let aptNumber = 302 ;
let street = "Meredith Way";
let city = "Boulder";
let state = "Colorado";
let postal = 80303;

let myAddress = fName + " " + lName + " located at " + houseNumber + " " + street + " apt " + aptNumber + ", " + city + " " + state + ", " +postal;
console.log(myAddress);