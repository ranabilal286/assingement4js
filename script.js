let originalString = "I love my country Pakistan.<br />I like my city Faisalabad.<br />I love my Homeland."

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]


// to lowercase
function toLowercase() {

    let lowercase = originalString.toLowerCase()
    document.getElementById("output").innerHTML = ""
    document.getElementById("output").innerHTML = lowercase

}


// to upppercase
function toUppercase() {

    let uppercase = originalString.toUpperCase()
    document.getElementById("output").innerHTML = ""
    document.getElementById("output").innerHTML = uppercase

}


// to capitalize
function capitalize() {

    document.getElementById("output").innerHTML = ""
    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = originalString

}


// better formating
function betterFormating() {

    let value = document.getElementById("input").value;

    if (!value) {
        alert('Please Add Text To Format.')
        return;
    }
    document.getElementById("output").innerHTML = "";

    let text = value.toLowerCase();
    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = text

}


// printAllCities
function printAllCities() {

    document.getElementById("output").innerHTML = ""
    for (i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ') ' + cities[i] + "<br />"
    }

}


// Function to add a city to the list
function addCity() {

    let cityInput = document.getElementById('input').value;
    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }
    document.getElementById("output").innerHTML = "";

    let city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

    if (cities.includes(city)) {
        document.getElementById("output").innerHTML = '<span class="text-danger" style="font-size:20px">"' + city + '"</span> is already in the list.<br/> Press "Print All Cities" to check."';
    } else {
        cities.push(city);
        document.getElementById("output").innerHTML = 'Your city <span class="text-success" style="font-size:20px">"' + city + '"</span> has been successfully added to the list.<br/> Press "Print All Cities" to check."';
    }

}


// Function to check if a city is in the list
function checkCity() {

    let cityInput = document.getElementById('input').value;
    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }
    document.getElementById("output").innerHTML = "";

    let city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

    if (cities.includes(city)) {
        document.getElementById("output").innerHTML = '<span class="text-success" style="font-size:20px">"' + city + '"</span> is already in the list.<br />Please press "Print all cities" to check it.';
    } else {
        document.getElementById("output").innerHTML = 'Sorry &#128524 we couldn\'t find your city <span class="text-danger" style="font-size:20px">"' + city + '"</span> in the list.<br />Press "Add your city to the list" button to add it.';
    }

}


// find word 
function findWord() {

    let findWord = document.getElementById("input").value;

    if (!findWord) {
        alert('Please Enter a Word.');
        return;
    }

    document.getElementById("output").innerHTML = "";
    let newString = originalString.toLowerCase();
    let wordIndex = newString.indexOf(findWord.toLowerCase());

    if (wordIndex !== -1) {
        document.getElementById("output").innerHTML = 'Word found at index: <span class="text-success" style="font-size:20px">"' + wordIndex + '"</span>'
    } else {
        document.getElementById("output").innerHTML = '<p class="text-danger fs-5">"Word not found"</p>';
    }

}


// Replace a word function
function toReplaceWord() {

    let newOriginalString = originalString.toLowerCase();

    let word = document.getElementById("input").value;

    if (!word) {
        alert('Type a word you want to change from original string.');
        return;
    }

    let replaceWith = prompt('Enter the word you want to change it with.');

    if (!replaceWith) {
        alert('Please type a word to replace it with "' + word + "\".");
        return;
    }
    document.getElementById("output").innerHTML = "";

    word = word.toLowerCase();

    word = new RegExp(word, 'g');

    replaceWith = replaceWith.toLowerCase();

    let replaceWord = newOriginalString.replace(word, replaceWith);

    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = replaceWord;

}




// clear input 
function clearInput() {
    document.getElementById("input").value = "";
}


// clear output 
function clearOutput() {
    let clearOutput = document.getElementById("output").innerHTML;

    if (clearOutput === "") {
        Toastify({
            text: "Output is already cleared.",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    } else {
        document.getElementById("output").innerHTML = ""
        Toastify({
            text: "Output is cleared successfully.",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "green",
            },
            onClick: function () { } // Callback after click
        }).showToast();

    }

}