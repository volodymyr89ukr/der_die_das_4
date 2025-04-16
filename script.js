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
}

function checkAnswer(userInput) {
  if (!currentWord) return;

  let message = "";
  let isCorrect = false;

  if (userInput === currentWord.gender) {
    const count = correctStreak.get(currentWord.noun) || 0;
    correctStreak.set(currentWord.noun, count + 1);
    isCorrect = true;
    message = `✅ Правильно! ${currentWord.gender} ${currentWord.noun} (${currentWord.translation})`;

    if (correctStreak.get(currentWord.noun) >= 2) {
      activeWords = activeWords.filter((w) => w.noun !== currentWord.noun);
    }
  } else {
    correctStreak.set(currentWord.noun, 0);
    message = `❌ Неправильно. Правильна відповідь: ${currentWord.gender} ${currentWord.noun} (${currentWord.translation})`;
  }

  document.getElementById("feedback").innerText = message;

  // Затримка озвучення — 0.2 сек після відповіді
  setTimeout(() => {
    playAudio(`${currentWord.gender} ${currentWord.noun}`);
  }, 100);

  // Затримка перед новим словом — 2.2 сек, щоб встигла відтворитися вимова
  setTimeout(showNextWord, 2100);
}

function playAudio(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  speechSynthesis.cancel(); // зупинити попереднє, якщо ще йде
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
