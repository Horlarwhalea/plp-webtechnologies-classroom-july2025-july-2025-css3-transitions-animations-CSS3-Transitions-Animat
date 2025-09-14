// Demonstrating function scope, parameters, and return values

// Global variable
let globalMessage = "Animation triggered!";

// Function with parameter and return value
function multiplyByTwo(num) {
  // local scope variable
  let result = num * 2;
  return result; // return value
}

// Function that triggers the CSS animation on the box
function triggerAnimation() {
  const box = document.getElementById("animateBox");

  // Log demonstrating function scope & return value
  let doubled = multiplyByTwo(5);
  console.log("5 multiplied by 2 is:", doubled);

  // Toggle animation class
  box.classList.toggle("spinAnimation");

  // Access global variable
  console.log(globalMessage);
}

// Event listener for the button
document.getElementById("triggerBtn").addEventListener("click", triggerAnimation);
