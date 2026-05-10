/**************************
Name of Task 7
**************************/

console.log("Task 7,")

//variables
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/**********************
Main
**********************/

displayProduct(1, "Chocolate bar", 4);
displayProduct(2, "Chips", 3);
displayProduct(3, "Drink", 2.50);

/**********************
Functions
**********************/

function displayProduct(_number, _name, _price) {
    OUTPUT.innerHTML += "<p>" + _number + ". " + _name + ": $" + _price + "</p>";
}