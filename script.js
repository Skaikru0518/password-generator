let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let symbols = document.getElementById("numbers");
let numbers = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyBtn = document.getElementById("copyBtn");



// adjust lenght with slider
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})

// button event
genBtn.addEventListener('click', () => {
    passBox.value = generatepassword();
})

// generate password function
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "!@#$%^&*()_+";

function generatepassword() {
    let genPasswrod = "";



    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? numberChars : "";
    allChars += symbols.checked ? symbolChars : "";


    let i = 1;
    while (i <= inputSlider.value) {
        genPasswrod += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPasswrod
}

copyBtn.addEventListener('click', () => {
    if (passBox.value === "") {
        alert("No password to copy");
        return;
    } else {
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = "check";
        setTimeout(() => {
            copyBtn.innerText = "content_copy";
        }, 3000);
    }
});