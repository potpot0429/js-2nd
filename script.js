const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const counterDisplay = document.getElementById('counter');
const submit = document.getElementById('showAllertButton');
const resetButton = document.getElementById('resetButton');
let start = 0;
const usernameInput= document.getElementById('username');
const greetingMessage = document.getElementById('greetingMessage');
const greetButton = document.getElementById('greetButton');
const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphMessage = document.getElementById('paragraphMessage');
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');



// increment and decrement button and alert
incrementButton.addEventListener('click', function () {
    start += 1;
    counterDisplay.textContent = start;
});

decrementButton.addEventListener('click', function () {
    start -= 1;
    counterDisplay.textContent = start;
});

// dinagdagan ko lang ng reload para kunwari nasubmit tlga yung order hehe
submit.addEventListener('click', function () {
    alert('Order Submitted');
    setTimeout(function () {
        location.reload();
    }, 1000);
});
// reset button
resetButton.addEventListener('click', function () {
    location.reload ();
})

// for Greet Me Button

function isValidName (name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

greetButton.addEventListener('click', function () {
    const username = usernameInput.value.trim();


if (username === '') {
    greetingMessage.textContent= 'Please enter your name.';
} else if (!isValidName (username)) {
    greetingMessage.textContent = 'Invalid input. Please use only letters.';
} else {
    greetingMessage.textContent = `Hello, ${username}!`;
}

});


// for add paragraphMessage

addParagraphButton.addEventListener('click', function () {
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = 'Thank you so much!';
    paragraphMessage.appendChild(newParagraph)
})

// for toggle
menuButton.addEventListener('click', function () {
    if ( menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});


