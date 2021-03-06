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

//   fizzBuzz(10);

// CIRCLE CLASS

class Circle1{
    constructor(radius){
        if(typeof radius != 'number'){
            throw "bad input";
        }
        else{
            this.radius = radius;
        }
    }

    circumference(){
        let circum = (this.radius * (2 * Math.PI)).toFixed(2);
        console.log(circum);
        return circum
    }

    area(){
        let area = ((Math.pow(this.radius,2)) * Math.PI).toFixed(2)
        console.log(area)
        return area;
    }
}

// let circ = new Circle1(4);
// circ.circumference()
// circ.area();


class Pizza{
    constructor(toppings){
        if(toppings.includes("pineapple")){
            throw "no pineapples allowed"
        }
        else{
            this.toppings = toppings;
        }
    }
}



// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))

async function getData(){
    let response = await fetch("https://api.openbrewerydb.org/breweries/search?query=boulder&per_page=5")
    let data = await response.json();
    console.table(data);
    data.forEach(function(response){
        console.log(response.name)
    })
}

getData();

