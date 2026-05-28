
console.log("Task 10");
console.log("SEMITI");



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
    OUTPUT.innerHTML += "You were born in Tonga <br>";

    OUTPUT.innerHTML += "In 10 years you will be " + (age + 10) + " years old <br>";

    money = Math.floor(money / 2);
    OUTPUT.innerHTML += "You spend half of your money, now you have " + money + " dollars <br>";

    money = money + 3;
    OUTPUT.innerHTML += "Then you get $3, now you have " + money + " dollars <br>";

    answer = currentYear - age;
    OUTPUT.innerHTML += "You were born in " + answer + "<br>";
}


function start() {

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
    OUTPUT.innerHTML = "<h2>Im superman.</h2>"
}               

function getFormInput(){
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");
let userName = NAME_FIELD.value;
let userAge = AGE_FIELD.value;
let userMoney = MONEY_FIELD.value;
 OUTPUT.innerHTML ="<h2>Welcome to the Shop, "+userName+". You are "+userAge+" years old. You have "+userMoney+" dollars.</h2>"; 
}