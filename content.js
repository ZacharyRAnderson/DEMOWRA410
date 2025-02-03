// const variable to createElement / create button.
const button = document.createElement("button");

// button styling (.style)
button.innerText = "Change Background";
button.style.backgroundColor = "#ffffff";
button.style.border = "1px solid #000000";
button.style.padding = "20px";

// Append / Inject button to the body of the webpage.
document.body.appendChild(button);

// Define array of colors and set index to 0 (start at black).
const colors = ["black", "red", "green", "blue", "yellow"];
let index = 0;

// Add Event Listener to change backgroundColor after each click.
button.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[index];
  // when button is clicked, index changes to next color
  // by adding/shifting 1 within the length of the array.
  index = (index + 1) % colors.length;
});
