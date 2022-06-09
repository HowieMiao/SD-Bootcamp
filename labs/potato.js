

function potatoPoem(){
    let count = 1;
    while(count <= 8){
        if(count == 8){
            console.log("More!");
        }
        else if(count == 4){
            console.log("4!")
        }
        else{
            console.log(count + "Potato")
        }
        count++;
    }
}

potatoPoem();

