const secretPhrases = ["kids" , "childeren" , "trip" , "hospital" , "doctor" , "kindergarden"]

let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;

function selectRandomItem(){
    randomItem = secretPhrases[Math.floor(Math.random()*secretPhrases.lenght)];
    document.getElementById("letters").addEventListener("click",buttonHandler);

    console.log(randomItem);
}