/**************************
Name of Task 15
**************************/

console.log("Task 15");
console.log("Daniel");

let OUTPUT;

/**********************
Functions
**********************/

function start() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML = "";

    // Ask the user for the starting number
    let verses = Number(prompt("How many verses would you like to sing?"));

    // For loop
    for (let i = verses; i > 0; i--) {

        OUTPUT.innerHTML += i + " bottles of milk on the wall, "
                          + i + " bottles of milk.<br>";

        OUTPUT.innerHTML += "Take one down and pass it around, "
                          + (i - 1) + " bottles of milk on the wall.<br><br>";
    }

}