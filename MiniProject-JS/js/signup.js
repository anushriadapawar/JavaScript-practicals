// js/signup.js
document.querySelector("#signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  // Get existing users or initialize empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const exists = users.some(u => u.email === email);
  if (exists) {
    alert("Email already registered. Please login.");
    return;
  }

  // Save new user
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! You can now log in.");
  window.location.href = "login.html";
});
