// add some functions to show and hide the forms
function showSignup() {
  // hide the login form and show the signup form
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "flex";
  // add the active class to the signup button and remove it from the login button
  document.getElementById("signup-btn").classList.add("active");
  document.getElementById("login-btn").classList.remove("active");
}

function showLogin() {
  // hide the signup form and show the login form
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "flex";
  // add the active class to the login button and remove it from the signup button
  document.getElementById("login-btn").classList.add("active");
  document.getElementById("signup-btn").classList.remove("active");
}
