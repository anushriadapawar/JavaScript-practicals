// js/login-validation.js

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // Basic validation
  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find user match
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password. Please try again or sign up first.");
    return;
  }

  // Successful login
  sessionStorage.setItem("loggedInUser", JSON.stringify(user));
  alert(`Welcome back, ${user.name || user.email}!`);

  // Redirect to courses or dashboard
  window.location.href = "courses.html";
});
