// Get elements using DOM methods
const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

// Using querySelector for buttons
const stopBtn = document.querySelector('#stop-btn');
const waitBtn = document.querySelector('#wait-btn');
const goBtn = document.querySelector('#go-btn');

// Function to turn off all lights
function resetLights() {
  redLight.classList.remove('active');
  yellowLight.classList.remove('active');
  greenLight.classList.remove('active');
}

// Event Handlers
stopBtn.addEventListener('click', () => {
  resetLights();
  redLight.classList.add('active');
});

waitBtn.addEventListener('click', () => {
  resetLights();
  yellowLight.classList.add('active');
});

goBtn.addEventListener('click', () => {
  resetLights();
  greenLight.classList.add('active');
});

// Example of DOM manipulation - adding a message dynamically
const message = document.createElement('p');
message.textContent = "Click a button to change the traffic signal.";
document.body.appendChild(message);
