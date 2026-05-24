
/**************************
Name of Task 9
**************************/

console.log("Task 9");
console.log("Daniel");

let OUTPUT;

/**********************
Functions
**********************/

function start() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML = "";

    let age = 15;
    let money = 125;
    let currentYear = 2026;

    OUTPUT.innerHTML += "As of now you are " + age + " years old <br>";
    OUTPUT.innerHTML += "You have " + money + " dollars <br>";
    OUTPUT.innerHTML += "You were born in Ecuador <br>";

    OUTPUT.innerHTML += "In 10 years you will be " + (age + 10) + " years old <br>";

    money = Math.floor(money / 2);
    OUTPUT.innerHTML += "You spend half of your money, now you have " + money + " dollars <br>";

    money = money + 3;
    OUTPUT.innerHTML += "Then you get $3, now you have " + money + " dollars <br>";

    answer = currentYear - age;
    OUTPUT.innerHTML += "You were born in " + answer + "<br>";
}