function toggleMode() {
  // Get the body element
  var body = document.getElementsByTagName("html")[0];
  var darkCredit = document.getElementById("dark-credit");
  var lightCredit = document.getElementById("light-credit");
  var icon = document.getElementsByClassName("icon")[0];

  if (body.className == "light-mode") {
    body.className = "dark-mode";
    darkCredit.classList.add("active");
    lightCredit.classList.remove("active");
    document.cookie = "mode=dark; path=/";

    icon.className = "icon fas fa-sun";
  } else {
    body.className = "light-mode";
    lightCredit.classList.add("active");
    darkCredit.classList.remove("active");
    document.cookie = "mode=light; path=/";

    icon.className = "icon fas fa-moon";
  }
}

function setInitialMode() {
  // Get the body element and the icon element
  var body = document.getElementsByTagName("html")[0];
  var icon = document.getElementsByClassName("icon")[0];
  // Check if there is a cookie with the mode value
  var cookie = document.cookie.match(/mode=(\w+)/);
  if (cookie) {
    // Set the class and the icon according to the cookie value
    if (cookie[1] == "dark") {
      body.className = "dark-mode";
      icon.className = "icon fas fa-sun";
    } else {
      body.className = "light-mode";
      icon.className = "icon fas fa-moon";
    }
  } else {
    // Check the user's preferred color scheme
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Set the class and the icon accordingly
    if (prefersDark) {
      body.className = "dark-mode";
      icon.className = "icon fas fa-sun";
      // Save the cookie with the value "dark"
      document.cookie = "mode=dark; path=/";
    } else {
      body.className = "light-mode";
      icon.className = "icon fas fa-moon";
      // Save the cookie with the value "light"
      document.cookie = "mode=light; path=/";
    }
  }
}

// Call the setInitialMode function when the page loads
window.onload = setInitialMode;
