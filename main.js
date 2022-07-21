// Password Generator

// HTML Elements
let lowerCheckbox = document.getElementById("lowercase");
let upperCheckbox = document.getElementById("uppercase");
let numCheckbox = document.getElementById("numbers")
let submitBtn = document.getElementById("submitBtn");
let password = document.getElementById("result");

// Global Variables
let characters = [];

document.addEventListener("change", setParameters);
submitBtn.addEventListener("click", generatePwd);

function setParameters() {
    characters = [];
    if (lowerCheckbox.checked) {
        characters.concat(lowercase);
    }
    if (upperCheckbox.checked) {
        characters.concat(uppercase);
    }
    if (numCheckbox.checked) {
        characters.concat(numbers);
    }
}

function generatePwd() {
    console.log(randLowercase());
    console.log(randUppercase());
    console.log(randNumber());
}

// Arrays
// I could get a file of all characters (numbers, lower, upper, etc.) then convert to array but I think it's just faster to type all out and use CTRL D to add quotations
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Helper Functions
// Return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low
}

// Random Integer: low (inclusive) to high (exclusive)
function randomInt(low, high) {
    return Math.floor(randomDec(low, high))
}

function randLowercase() {
    return lowercase[randomInt(0, 27)];
}

function randUppercase() {
    return uppercase[randomInt(0, 27)];
}

function randNumber() {
    return numbers[randomInt(0, 10)];
}