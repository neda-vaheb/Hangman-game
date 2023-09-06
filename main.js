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

function setUnderScores(){
    let splitedWord = randomItem.split("");
    let mappedWord = splitedWord.map(letter => clicked.indexOf(letter) >=0 ? letter : "-")
    result = mappedWord.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`;
}