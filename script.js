const words = [
  { noun: "Hose", gender: "die", translation: "штани" },
  { noun: "Flugzeug", gender: "das", translation: "літак" },
  { noun: "Bein", gender: "das", translation: "нога" },
  { noun: "Sonne", gender: "die", translation: "сонце" },
  { noun: "Hund", gender: "der", translation: "пес" },
  { noun: "Tisch", gender: "der", translation: "стіл" },
  { noun: "Lampe", gender: "die", translation: "лампа" },
  { noun: "Auto", gender: "das", translation: "авто" },
  // Додай ще тисячі тут…
];

let availableWords = [...words];
let activeWords = [];
let currentWord = null;
let correctStreak = new Map(); // Map для підрахунку правильних відповідей поспіль

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function pickActiveWords() {
  while (activeWords.length < 20 && availableWords.length > 0) {
    const index = Math.floor(Math.random() * availableWords.length);
    const word = availableWords.splice(index, 1)[0];
    activeWords.push(word);
  }
}

function showNextWord() {
  if (activeWords.length === 0 && availableWords.length === 0) {
    document.getElementById("result").innerText =
      "🎉 Всі слова вивчені! Гру завершено.";
    return;
  }

  pickActiveWords();

  currentWord = activeWords[Math.floor(Math.random() * activeWords.length)];
  document.getElementById(
    "question"
  ).innerText = `${currentWord.noun} (${currentWord.translation})`;
  document.getElementById("feedback").innerText = "";
  playAudio(`${currentWord.gender} ${currentWord.noun}`);
}

function checkAnswer(userInput) {
  if (!currentWord) return;

  if (userInput === currentWord.gender) {
    const count = correctStreak.get(currentWord.noun) || 0;
    correctStreak.set(currentWord.noun, count + 1);

    document.getElementById(
      "feedback"
    ).innerText = `✅ Правильно! ${currentWord.gender} ${currentWord.noun} (${currentWord.translation})`;

    if (correctStreak.get(currentWord.noun) >= 2) {
      activeWords = activeWords.filter((w) => w.noun !== currentWord.noun);
    }
  } else {
    correctStreak.set(currentWord.noun, 0);
    document.getElementById(
      "feedback"
    ).innerText = `❌ Неправильно. Правильна відповідь: ${currentWord.gender} ${currentWord.noun} (${currentWord.translation})`;
  }

  setTimeout(showNextWord, 1200);
}

function playAudio(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  speechSynthesis.cancel(); // зупинити попереднє озвучення
  speechSynthesis.speak(utterance);
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    checkAnswer(button.textContent.trim());
  });
});

document.getElementById("play-audio").addEventListener("click", () => {
  if (currentWord) {
    playAudio(`${currentWord.gender} ${currentWord.noun}`);
  }
});

window.onload = () => {
  shuffle(availableWords);
  showNextWord();
};
