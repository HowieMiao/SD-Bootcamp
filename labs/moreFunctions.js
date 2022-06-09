
function ageCalc(num){
    let sec = num * 365 * 24 * 60 * 60;
    console.log("You are " + sec + " seconds old!")
    return sec;
}

// ageCalc(27);

function supplyCalc(age, count, name){
    age = dayConvert(100-age);
    count = count * age;
    console.log("You will need " + count + " " + name + "(s) to last the rest of your life");
    return count;
}

function dayConvert(num){
    let day = num * 365;
    return day;
}

// supplyCalc(20 , 3, "cookie");

function madLib(noun, verb, directObject) {
    let lib = noun + " " + verb + "ed the " + directObject + "!";
    console.log(lib);
}

// madLib('Bill', 'jump', 'dog'); // => "Bill jumped the dog!"