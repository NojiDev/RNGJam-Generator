let max_rolls = 2;
console.log(localStorage.getItem("rerollsLeft"))

if (localStorage.getItem("rerollsLeft") == null){
    localStorage.setItem("rerollsLeft", max_rolls)
};



let possible_themes = ["Sea horse","Salmon","Crab","Tuna"];

function pageLoad() {
    document.getElementById("generated word").innerHTML = localStorage.getItem("chosenTheme")

    if (localStorage.getItem("rerollsLeft") == 0){
        document.getElementById("reroll button").innerHTML = "No rerolls left"
    }
}

function generateNumber() {
    let rerolls_left = localStorage.getItem("rerollsLeft")
    
    console.log(rerolls_left)
    if (rerolls_left >= 1){
        rerolls_left -= 1

        let randomNumber = Math.floor(Math.random() * possible_themes.length);


        localStorage.setItem("rerollsLeft", rerolls_left)
        localStorage.setItem("chosenTheme", possible_themes[randomNumber])

        let chosen_theme = localStorage.getItem("chosenTheme")

        document.getElementById("generated word").innerHTML = chosen_theme
        document.getElementById("reroll button").innerHTML = "Rerolls left: " + String(rerolls_left)


    };
};
