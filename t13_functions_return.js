/**************************
Name of Task 13
**************************/

console.log("Task 13");
console.log("Semiti");

let OUTPUT;

/**********************
Functions
**********************/

// FUNCTION WITH PARAMETERS + RETURN VALUE
function calculateChange(_money, _price) {

    return _money - _price;

}

function start() {

    OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    OUTPUT.innerHTML = "";

    let age = 15;
    let money = 126;
    let currentYear = 2026;

    OUTPUT.innerHTML += "As of now you are " + age + " years old <br>";
    OUTPUT.innerHTML += "You have " + money + " dollars <br>";
    OUTPUT.innerHTML += "You were born in Tonga <br>";

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
        OUTPUT.innerHTML += "You CAN afford a chocolate bar <br>";

        // USING THE FUNCTION
        let change = calculateChange(money, 4);

        OUTPUT.innerHTML += "You will get $" + change + " change";

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

    if (money >= 4) {

        OUTPUT.innerHTML += "A chocolate bar costs $4 <br>";
        OUTPUT.innerHTML += "You CAN afford a chocolate bar <br>";

        let change = calculateChange(money, 4);

        OUTPUT.innerHTML += "You will get $" + change + " change";

    } else {

        OUTPUT.innerHTML += "A chocolate bar costs $4 <br>";
        OUTPUT.innerHTML += "Sorry you CAN'T afford a chocolate bar";

    }
}
