// Password Generator

// HTML Elements
let lowerCheckbox = document.getElementById("lowercase");
let upperCheckbox = document.getElementById("uppercase");
let numCheckbox = document.getElementById("numbers");
let specialCharCheckbox = document.getElementById("special");
let submitBtn = document.getElementById("submitBtn");
let password = document.getElementById("result");

// Global Variables
let characterTypes = [];

document.addEventListener("change", setParameters);
submitBtn.addEventListener("click", generatePwd);

function setParameters() {
    characterTypes = [];
    if (lowerCheckbox.checked) {
        characterTypes.push(lowercase);
    }
    if (upperCheckbox.checked) {
        characterTypes.push(uppercase);
    }
    if (numCheckbox.checked) {
        characterTypes.push(numbers);
    }
    if (specialCharCheckbox.checked) {
        characterTypes.push(specialChars);
    }
}

function generatePwd() {
    let str = "";
    for (let n = 0; n < 10; n++) {
        let x = randomInt(0, characterTypes.length);
        str += characterTypes[x][randomInt(0, characterTypes[x].length)];
    }
    password.innerHTML = str;
}

// Arrays
// I could get a file of all characters (numbers, lower, upper, etc.) then convert to array but I think it's just faster to type all out and use CTRL D to add quotations
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "<", ">", ",", ".", "/", "~"];

// Helper Functions
// Return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low
}

// Random Integer: low (inclusive) to high (exclusive)
function randomInt(low, high) {
    return Math.floor(randomDec(low, high))
}