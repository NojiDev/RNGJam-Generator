let rerolls = 2;
let possible_themes = ["Sea horse","Salmon","Crab","Tuna"];

function generateNumber() {
    if (rerolls >= 1){

        let randomNumber = Math.floor(Math.random() * possible_themes.length);
        console.log(possible_themes[randomNumber]);

        rerolls -= 1;

        document.getElementById("generated word").innerHTML = String(possible_themes[randomNumber])
        document.getElementById("reroll button").innerHTML = "Rerolls left: " + String(rerolls)


    };
};