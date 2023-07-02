const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeat-password");

const eye = document.getElementById("password-eye");
const repeatEye = document.getElementById("password-repeat-eye");

eye.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

repeatEye.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    repeatPasswordInput.getAttribute("type") === "password"
      ? "text"
      : "password";
  repeatPasswordInput.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
