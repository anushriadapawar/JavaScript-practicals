// Get elements
const themeToggleBtn = document.getElementById('theme-toggle');
const sessionInfo = document.getElementById('session-info');

// ---------- THEME SWITCHER (localStorage) ----------
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

// ---------- SESSION COUNTER (sessionStorage) ----------
let reloadCount = sessionStorage.getItem('reloadCount') || 0;
reloadCount++;
sessionStorage.setItem('reloadCount', reloadCount);
sessionInfo.textContent = `You have reloaded this page ${reloadCount} time(s) in this session.`;
