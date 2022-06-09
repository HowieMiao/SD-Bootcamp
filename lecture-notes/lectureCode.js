function tipCalc(preTax, tax, tipPercent){
    let total = preTax * ((tax/100)+1) * ((tipPercent/100)+1);
    console.log("your total is " + total);
    return total;
}

// tipCalc(100, 10, 20); // 132 dollars

function ageCheck(age){
    if(age <= 17){
        console.log("You can't do anything");
    }
    if(age >= 18){
        console.log("You can vote!");
    }
    if(age >= 21){
        console.log("You can drink!");
    }
    if(age >= 25){
        console.log("You can rent a car!");
    }
    else{
        console.log("bad input");
    }
}

// ageCheck(12);