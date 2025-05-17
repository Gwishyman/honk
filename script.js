// script.js

function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (user && pass) {
    // Simulate authentication
    localStorage.setItem("loggedInUser", user);
    document.getElementById('error').innerText = 'Logging in...';
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 800);
  } else {
    document.getElementById('error').innerText = 'Please enter both username and password.';
  }
}

// Optional: You can also use this to show username on home.html
function showLoggedInUser() {
  const user = localStorage.getItem("loggedInUser");
  if (user && document.getElementById("usernameDisplay")) {
    document.getElementById("usernameDisplay").innerText = "@" + user;
  }
}  
