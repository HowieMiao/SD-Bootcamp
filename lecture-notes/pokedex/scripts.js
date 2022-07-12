let form = document.getElementById("search-form");
form.addEventListener('submit', getData)
let submission = document.getElementById("search-input");

async function getData(){
    event.preventDefault();
    let abilities = document.getElementsByClassName("ability");
    let i = 0;
    if(abilities.length != 0){
        while(i<=abilities.length){
            abilities[i].remove();
            i++;
        }
    }   
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${submission.value}`)
    let data = await response.json();
    let abilityArr = data.abilities;
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("img").src = data.sprites.front_default;
    document.getElementById("weight").innerHTML = data.weight;
    document.getElementById("hp").innerHTML = `${data.stats[0].base_stat} HP ${data.stats[1].base_stat} Attack`;
    document.getElementById("ability").innerHTML = "";
    let newH2;
    let newContent;
    abilityArr.forEach(function(ability1){
        newH2=document.createElement("h2");
        newContent = document.createTextNode(`${ability1.ability.name} `)
        newH2.appendChild(newContent);
        newH2.className = "ability";
        let currentDiv = document.getElementById("test");
        currentDiv.appendChild(newH2);
    })
}

