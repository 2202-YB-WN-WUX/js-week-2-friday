
// global scope
// var name = "Tim";
// var greeting = "Hello" + name;
// function newFunction() {
//   // block scope
//   var number = 1;
// }

// recdeclared the variable
// var name = "Cheese";

// Let

// album = "The white album";
// console.log(album);

// let album = "Dark side of the moon";
//
// function favoriteAlbum(){
//   let album = "the fame";
//   console.log(album);
// }
// favoriteAlbum();
// console.log(album);
// 1.
// Using lets instead of vars, build a Javascript app which takes a number (miles) and converts it into kilometers. Show the full equation on the screen.
// Use a function to calculate the conversion.
// Use const to reference the element.
//
// 2.
// Extension: add a random image from Lorem Picsum
// to your page using Javascript



// const result = document.getElementById('result');
// let miles = prompt("Enter miles");
//
// function convertMiles() {
//   let km = miles * 1.60934;
//   result.innerHTML = miles + " miles = " + km + " km";
// }
// convertMiles();

// adding an image
// const image = document.getElementById('image');
image.innerHTML = "<img src='https://picsum.photos/seed/picsum/200/300' alt='alt goes here'>";

// Exercise: make it so when you click the image, the border-radius
// of the image becomes 100%;

// Backticks
// ``
//
// let food = `kfc`;
// console.log(food);
// let heroSection = `
//   <div>
//     <h1 id="hero-header">Hero section</h1>
//     <p>Hello</p>
//     <a href="http://google.com">A link</a>
//   <div>
// `;
// result.innerHTML = heroSection;

// Activity:
// Add a footer through Javascript - use a variable called footer,
// place it in a div with the ID of footer, use backticks
// to render the footer. Give it some styles through CSS.

// const footer = document.getElementById('footer');
//
// footer.innerHTML = `
//   <div class="column">
//     <h3>Site map</h3>
//     <ul>
//         <li>Link 1</li>
//         <li>Link 2</li>
//         <li>Link 3</li>
//   </div>
//   <div class="column">
//     <h3>Terms or conditions</h3>
//   </div>
//   <div class="column">
//     <h3>Company logo</h3>
//   </div>
// `;

// showing variables in backticks
// let num1 = 1;
// let num2 = 20;
// // let result = num1 + num2;
// // let resultMessage = "The answer is " + result;
// let resultMessage = `The answer is ${num1 + num2}`;
// alert(resultMessage);
//
let name = prompt("What is your name?")
alert(`Hi ${name}, how's it going?`);


// Using backticks, create an app which takes two numbers (using prompts) and subtracts 100 to them.
// Show both the numbers in a console.log.
// Show them in the format "num1 + 100 = ?", "num2 + 100 = ?"

// let number1 = prompt("number 1?");
// let number2 = prompt("number 2?");
// console.log(`${number1} + 100 = ${number1 - 100}`);


// Using backticks, create an app which prompts the user
// for their top 3 hottest celebrities.
// Show the result on the page in an ordered list.

// Extension: also ask the user for an image URL, using a prompt.
// Show that image on the screen. Make it an image of a celebrity.
// let imageURL = prompt("Add an image URL");
// const result = document.getElementById('result');
// result.innerHTML = `
// <img src="${imageURL}" alt="vincent patternson">
// `;

// -----------------CLOUD: Random image generator-------------------
// Your app should:
//
// Ask the user for a 3 random strings of letters
// Add 3 random images from LoremPicsum to your page using the random word as the seed
// Show the random images on the screen, styled so they are different sizes.
// If you click on an image, hide the image by making the opacity equal to 0
//
// Your app should use backticks, let and const.
// Use a transition property on the CSS to make the images slowly fade out.
//
