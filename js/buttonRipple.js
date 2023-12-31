// Add a function to create the ripple effect
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

// Add an event listener to the button
const button = document.getElementsByClassName("login-button")[0];
const secondryButton = document.getElementsByClassName("secondry-button")[0];
if (button) {
  button.addEventListener("click", createRipple);
}
if (secondryButton) {
  secondryButton.addEventListener("click", createRipple);
}

const rippleButtons = document.getElementsByClassName("ripple-button");
for (let i = 0; i < rippleButtons.length; i++) {
  rippleButtons[i].addEventListener("click", createRipple);
}
