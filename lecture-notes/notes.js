//Fizzbuzz challenge

/*
    Create an arrow function expression called
    fizzBuzz that takes one parameter. This parameter
    will an amount of numbers that a loop within a
    fucntion will iterate over. In the loop, have a 
    condition that checks if:
    If the number is evenly divisible by three
        Then print 'Fizz'
    If the number is evenly diviisble by five
        Then print 'Buzz'
    If the number is evenly divisible by five and three
        Then print 'FizzBuzz'
     Otherwise print "Actual number is not divisible by 3, 5, nor both."
*/

function fizzBuzz(maxiumum) {
    let currentNumber = 1;
    let outputS = "";
    let divs3 = false;
    
    while (currentNumber <= maxiumum) {
        if(currentNumber % 3 == 0){
            outputS += "Fizz";
            divs3 = true;
        }
        if(currentNumber % 5 == 0){
            outputS += "Buzz";
        }
        else if(divs3 == false){
            outputS = "Actual number is not divisible by 3, 5, nor both."
        }
        console.log(outputS);
        outputS = "";
        currentNumber++;
        divs3 = false
    }
  }

  fizzBuzz(10);