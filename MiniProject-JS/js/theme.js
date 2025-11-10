// theme.js
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Theme";
document.body.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
