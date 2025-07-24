const steps = [
  "1 - Wake up",
  "2 - Brush teeth",
  "3 - Get dressed",
  "4 - Breakfast",
  "5 - Learning time",
  "6 - Play time",
  "7 - Snack",
  "8 - Walk",
  "9 - Story time",
  "10 - Bedtime"
];

const list = document.getElementById("routine-list");
const resetBtn = document.getElementById("reset-btn");

const synth = window.speechSynthesis;

function speak(text) {
  if (synth.speaking) {
    synth.cancel(); // Stop current speech
  }
  const utter = new SpeechSynthesisUtterance(text);
  // Child-friendly voice options (you can customize)
  utter.lang = 'en-US';
  utter.rate = 0.9;
  utter.pitch = 1.2;
  synth.speak(utter);
}

function renderList() {
  list.innerHTML = "";
  steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    li.addEventListener("click", () => {
      li.classList.toggle("done");
      speak(step);
    });
    list.appendChild(li);
  });
}

resetBtn.addEventListener("click", () => {
  // Remove all done classes
  const items = list.querySelectorAll("li.done");
  items.forEach(item => item.classList.remove("done"));
});

renderList();

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registered"));
}
