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

const doneSound = document.getElementById("done-sound");

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8; // slower and clearer
  utterance.pitch = 1.2; // higher pitch, friendly tone
  window.speechSynthesis.speak(utterance);
}

steps.forEach((step, index) => {
  const li = document.createElement("li");
  li.textContent = step;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
    speak(step);  // speak the step text when clicked
  });

  list.appendChild(li);
});

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registered"));
}

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  const items = list.querySelectorAll("li.done");
  items.forEach(item => item.classList.remove("done"));
});
