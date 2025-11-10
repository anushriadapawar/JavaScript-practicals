const classes = [
  { name: "Yoga", start: "08:00", end: "09:00" },
  { name: "Pilates", start: "09:30", end: "10:30" },
  { name: "Zumba", start: "11:00", end: "12:00" },
  { name: "Strength Training", start: "14:00", end: "15:00" },
  { name: "CrossFit", start: "16:00", end: "17:00" }
];

const tableBody = document.querySelector("#scheduleTable tbody");
const timerEl = document.getElementById("timer");

// Helper: convert HH:MM string to Date object today
function timeToDate(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const now = new Date();
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
  return date;
}

// Render class schedule
function renderSchedule() {
  tableBody.innerHTML = "";
  classes.forEach(cls => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${cls.name}</td>
      <td>${cls.start}</td>
      <td>${cls.end}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Highlight active and upcoming classes
function updateSchedule() {
  const now = new Date();
  const rows = tableBody.querySelectorAll("tr");
  classes.forEach((cls, index) => {
    const start = timeToDate(cls.start);
    const end = timeToDate(cls.end);
    rows[index].classList.remove("active", "upcoming");
    if (now >= start && now < end) {
      rows[index].classList.add("active");
    } else if (now < start) {
      rows[index].classList.add("upcoming");
    }
  });
}

// Countdown to next class
function updateCountdown() {
  const now = new Date();
  const upcomingClasses = classes.map(cls => timeToDate(cls.start)).filter(d => d > now);
  if (upcomingClasses.length === 0) {
    timerEl.textContent = "No more classes today!";
    return;
  }
  const nextClassTime = upcomingClasses[0];
  const diff = nextClassTime - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerEl.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

// Alerts when a class starts
function scheduleAlerts() {
  const now = new Date();
  classes.forEach(cls => {
    const start = timeToDate(cls.start);
    const delay = start - now;
    if (delay > 0) {
      setTimeout(() => {
        alert(`Class "${cls.name}" is starting now!`);
      }, delay);
    }
  });
}

// Initialize
renderSchedule();
updateSchedule();
updateCountdown();
scheduleAlerts();

// Update every second
setInterval(() => {
  updateSchedule();
  updateCountdown();
}, 1000);
