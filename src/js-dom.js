// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

/// TODO: replace this with your code
let button = document.querySelector("#auth")

button.addEventListener(`click`, () => {
   if (button.innerText === "Log in") {
    button.innerText = "Log out"
   } else {
    button.innerText = "Log in"
   }
})


// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

/// TODO: replace this with your code
// let textInput = document.querySelector(`#alert-message`)
// textInput.addEventListener(`submit` , () => {
//     alert(textInput).value
// })

let form = document.querySelector('form')

// let alertInput = sendAlert.innerText
const createAlert = (event) => {
    let sendAlert = document.querySelector('#alert-message')
    event.preventDefault()
    alert(sendAlert.value)
    // alertInput.value = ''
}
form.addEventListener('submit', createAlert)


// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code
let addItem = document.querySelector('#item-adder')

const createListItem = (event) => {
    let listItem = document.querySelector('#list')
    event.preventDefault()
   let li = document.createElement('li')
   li.innerText = 'Item'
   listItem.appendChild(li)
//    li.setAttribute('id', 'list')
}
addItem.addEventListener('dblclick', createListItem)
// make it so that every time item adder is clicked, one item is added to the list
// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code
// let changeColor = document.querySelector('#color-changer')
let blueColor = document.querySelector('#blue')
let redColor = document.querySelector('#red')
const changeRed = (event) => {
    event.preventDefault()
    let reddeners = document.querySelectorAll('.changes-colors')
    for (let red of reddeners) {
        red.style.color = 'rgb(255, 0, 0)';
    }
}
const changeBlue = (event) => {
    event.preventDefault()
    let bluey = document.querySelectorAll('.changes-colors')
    for (let blue of bluey) {
        blue.style.color = 'rgb(0, 0, 255)';
    }
}
// blueColor.addEventListener('click', changeBlue)
redColor.addEventListener('click', changeRed)
blueColor.addEventListener('click', changeBlue)
// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code
let form2 = document.querySelector('#factorial-calculator')

const calculateF = (event) => {
    event.preventDefault()
    let result = document.querySelector('#result')
    console.log(`result: ${result}`)
    let answer = 1
    console.log(`answer: ${answer}`)
    let n = document.querySelector('#factorial-input').value
    console.log(`n: ${n}`)
if (n == 0 || n == 1) {
    result.innerText = answer
}
else {
    for (let i = n; i >= 1; i--) {
        answer = answer * i
        result.innerText = answer
    }
}

}
form2.addEventListener('submit', calculateF)
// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code
let recommendWord = document.querySelector('#recommend-word')

const wordLength = (event) => {
    event.preventDefault()
let word = document.querySelector('#word')
let feedback = document.querySelector('.form-feedback')
if (word.value.length < 4) {
    feedback.innerText = `The word must be at least 4 characters long.`
    feedback.style.color = 'rgb(255, 0, 0)';
}
else {
    feedback.innerText = `Thanks for your submission!`
    feedback.style.color = 'rgb(0,128,0)';
   
}
}
recommendWord.addEventListener('submit', wordLength)