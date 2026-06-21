/**************************
Name of Task 12
**************************/

console.log("Task 12");
console.log("semiti");

let OUTPUT;

/**********************
Functions
**********************/

function start() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML = "";

    let age = 15;
    let money = 126;
    let currentYear = 2026;

    OUTPUT.innerHTML += "As of now you are " + age + " years old <br>";
    OUTPUT.innerHTML += "You have " + money + " dollars <br>";
    OUTPUT.innerHTML += "You were born in Ecuador <br>";

    OUTPUT.innerHTML += "In 10 years you will be " + (age + 10) + " years old <br>";

    money = Math.floor(money / 2);
    OUTPUT.innerHTML += "You spend half of your money, now you have " + money + " dollars <br>";

    money = money + 3;
    OUTPUT.innerHTML += "Then you get $3, now you have " + money + " dollars <br>";

    let answer = currentYear - age;
    OUTPUT.innerHTML += "You were born in " + answer + "<br><br>";

    // CONDITIONAL STATEMENT
    if (money >= 4) {

        OUTPUT.innerHTML += "A chocolate bar costs $4 <br>";
        OUTPUT.innerHTML += "You CAN afford a chocolate bar";

    } else {

        OUTPUT.innerHTML += "A chocolate bar costs $4 <br>";
        OUTPUT.innerHTML += "Sorry you CAN'T afford a chocolate bar";

    }
}

function getFormInput() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    let name = document.getElementById("nameField").value;
    let age = Number(document.getElementById("ageField").value);
    let money = Number(document.getElementById("moneyField").value);

    OUTPUT.innerHTML = "";

    OUTPUT.innerHTML += "Hello " + name + "<br>";
    OUTPUT.innerHTML += "You are " + age + " years old.<br>";
    OUTPUT.innerHTML += "You have $" + money + ".<br><br>";

    // Conditional using the form values
    if (money >= 5) {
        OUTPUT.innerHTML += "You CAN afford a chocolate bar.";
    } else {
        OUTPUT.innerHTML += "Sorry, you CAN'T afford a chocolate bar.";
    }
}