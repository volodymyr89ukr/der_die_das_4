const words = [
  { noun: "Hose", gender: "die", translation: "штани" },
  { noun: "Flugzeug", gender: "das", translation: "літак" },
  { noun: "Bein", gender: "das", translation: "нога" },
  { noun: "Sonne", gender: "die", translation: "сонце" },
  { noun: "Kartoffel", gender: "die", translation: "картопля" },
  { noun: "Ehefrau", gender: "die", translation: "дружина" },
  { noun: "Hilfe", gender: "die", translation: "допомога" },
  { noun: "Butter", gender: "die", translation: "масло" },
  { noun: "Tochter", gender: "die", translation: "донька" },
  { noun: "Fahrkarte", gender: "die", translation: "проїзний квиток" },
  { noun: "Freundin", gender: "die", translation: "подруга" },
  { noun: "Stiefel", gender: "die", translation: "чоботи" },
  { noun: "Licht", gender: "das", translation: "світло" },
  { noun: "Bank", gender: "die", translation: "банк" },
  { noun: "Apfel", gender: "der", translation: "яблуко" },
  { noun: "Wolke", gender: "die", translation: "хмара" },
  { noun: "Abflug", gender: "der", translation: "виліт" },
  { noun: "Kleidung", gender: "die", translation: "одяг" },
  { noun: "Hähnchen", gender: "das", translation: "курча" },
  { noun: "Lehrer", gender: "der", translation: "вчитель" },
  { noun: "Krankenhaus", gender: "das", translation: "лікарня" },
  { noun: "Sofa", gender: "das", translation: "софа" },
  { noun: "Mutter", gender: "die", translation: "мати" },
  { noun: "Banane", gender: "die", translation: "банан" },
  { noun: "Tisch", gender: "der", translation: "стіл" },
  { noun: "Unterricht", gender: "der", translation: "урок" },
  { noun: "Möbel", gender: "die", translation: "меблі" },
  { noun: "Arbeitsplatz", gender: "der", translation: "робоче місце" },
  { noun: "Ticket", gender: "das", translation: "квиток" },
  { noun: "Milch", gender: "die", translation: "молоко" },
  { noun: "Zug", gender: "der", translation: "поїзд" },
  { noun: "Hand", gender: "die", translation: "рука" },
  { noun: "Schrank", gender: "der", translation: "шафа" },
  { noun: "Haltestelle", gender: "die", translation: "зупинка" },
  { noun: "Garten", gender: "der", translation: "сад" },
  { noun: "Saft", gender: "der", translation: "сік" },
  { noun: "Kaffee", gender: "der", translation: "кава" },
  { noun: "Hemd", gender: "das", translation: "сорочка" },
  { noun: "Bus", gender: "der", translation: "автобус" },
  { noun: "Autobahn", gender: "die", translation: "автобан" },
  { noun: "Zimmer", gender: "das", translation: "кімната" },
  { noun: "Kleid", gender: "das", translation: "сукня" },
  { noun: "Rechnung", gender: "die", translation: "рахунок" },
  { noun: "Auge", gender: "das", translation: "око" },
  { noun: "Student", gender: "der", translation: "студент" },
  { noun: "Balkon", gender: "der", translation: "балкон" },
  { noun: "Spiegel", gender: "der", translation: "дзеркало" },
  { noun: "Schuhe", gender: "die", translation: "черевики" },
  { noun: "Partner", gender: "der", translation: "партнер" },
  { noun: "Stunde", gender: "die", translation: "година" },
  { noun: "Körper", gender: "der", translation: "тіло" },
  { noun: "Plan", gender: "der", translation: "план" },
  { noun: "Haar", gender: "das", translation: "волосся" },
  { noun: "Prüfung", gender: "die", translation: "екзамен" },
  { noun: "Lernen", gender: "das", translation: "навчання" },
  { noun: "Miete", gender: "die", translation: "орендна плата" },
  { noun: "Eltern", gender: "die", translation: "батьки" },
  { noun: "Meer", gender: "das", translation: "море" },
  { noun: "Taxi", gender: "das", translation: "таксі" },
  { noun: "Wohnung", gender: "die", translation: "квартира" },
  { noun: "Fleisch", gender: "das", translation: "м'ясо" },
  { noun: "Schwester", gender: "die", translation: "сестра" },
  { noun: "Jacke", gender: "die", translation: "куртка" },
  { noun: "Mund", gender: "der", translation: "рот" },
  { noun: "Auto", gender: "das", translation: "автомобіль" },
  { noun: "Pass", gender: "der", translation: "паспорт" },
  { noun: "Frage", gender: "die", translation: "питання" },
  { noun: "Himmel", gender: "der", translation: "небо" },
  { noun: "Fieber", gender: "das", translation: "лихоманка" },
  { noun: "Rücken", gender: "der", translation: "спина" },
  { noun: "Preis", gender: "der", translation: "ціна" },
  { noun: "Vater", gender: "der", translation: "батько" },
  { noun: "Schlafzimmer", gender: "das", translation: "спальня" },
  { noun: "Hobby", gender: "das", translation: "хобі" },
  { noun: "Gesundheit", gender: "die", translation: "здоров'я" },
  { noun: "Kopf", gender: "der", translation: "голова" },
  { noun: "Konto", gender: "das", translation: "рахунок" },
  { noun: "Fahrrad", gender: "das", translation: "велосипед" },
  { noun: "Wurst", gender: "die", translation: "ковбаса" },
  { noun: "Geschwister", gender: "die", translation: "браття і сестри" },
  { noun: "Abfahrt", gender: "die", translation: "від'їзд" },
  { noun: "Sport", gender: "der", translation: "спорт" },
  { noun: "Verkäufer", gender: "der", translation: "продавець" },
  { noun: "Medizin", gender: "die", translation: "медицина" },
  { noun: "Praktikum", gender: "das", translation: "практика" },
  { noun: "Waschmaschine", gender: "die", translation: "пральна машина" },
  { noun: "Birne", gender: "die", translation: "груша" },
  { noun: "Kasse", gender: "die", translation: "каса" },
  { noun: "Fisch", gender: "der", translation: "риба" },
  { noun: "Wein", gender: "der", translation: "вино" },
  { noun: "Arzt", gender: "der", translation: "лікар" },
  { noun: "Regen", gender: "der", translation: "дощ" },
  { noun: "Speisekarte", gender: "die", translation: "меню" },
  { noun: "Doktor", gender: "der", translation: "доктор" },
  { noun: "Aufgabe", gender: "die", translation: "завдання" },
  { noun: "Antwort", gender: "die", translation: "відповідь" },
  { noun: "Wetter", gender: "das", translation: "погода" },
  { noun: "Bier", gender: "das", translation: "пиво" },
  { noun: "Zucker", gender: "der", translation: "цукор" },
  { noun: "Flur", gender: "der", translation: "коридор" },
  { noun: "Großmutter", gender: "die", translation: "бабуся" },
  { noun: "Straßenbahn", gender: "die", translation: "трамвай" },
  { noun: "Haus", gender: "das", translation: "будинок" },
  { noun: "Ehemann", gender: "der", translation: "чоловік" },
  { noun: "Großeltern", gender: "die", translation: "бабусі й дідусі" },
  { noun: "Arm", gender: "der", translation: "рука" },
  { noun: "Obst", gender: "das", translation: "фрукти" },
  { noun: "Herd", gender: "der", translation: "плита" },
  { noun: "Familie", gender: "die", translation: "родина" },
  { noun: "Ohr", gender: "das", translation: "вухо" },
  { noun: "Brötchen", gender: "das", translation: "булочка" },
  { noun: "Brot", gender: "das", translation: "хліб" },
  { noun: "Dusche", gender: "die", translation: "душ" },
  { noun: "Mittagessen", gender: "das", translation: "обід" },
  { noun: "Partnerin", gender: "die", translation: "партнерка" },
  { noun: "Lösung", gender: "die", translation: "відповідь" },
  { noun: "Chef", gender: "der", translation: "начальник" },
  { noun: "Wohnzimmer", gender: "das", translation: "вітальня" },
  { noun: "Teppich", gender: "der", translation: "килим" },
  { noun: "Großvater", gender: "der", translation: "дідусь" },
  { noun: "Tasche", gender: "die", translation: "сумка" },
  { noun: "Bahnsteig", gender: "der", translation: "перон" },
  { noun: "Fußball", gender: "der", translation: "футбол" },
  { noun: "Apotheke", gender: "die", translation: "аптека" },
  { noun: "Nase", gender: "die", translation: "ніс" },
  { noun: "Bruder", gender: "der", translation: "брат" },
  { noun: "Beruf", gender: "der", translation: "професія" },
  { noun: "Lkw", gender: "der", translation: "вантажівка" },
  { noun: "Bauch", gender: "der", translation: "живіт" },
  { noun: "Kollege", gender: "der", translation: "колега" },
  { noun: "Tante", gender: "die", translation: "тітка" },
  { noun: "Arbeit", gender: "die", translation: "робота" },
  { noun: "Badezimmer", gender: "das", translation: "ванна кімната" },
  { noun: "Zahn", gender: "der", translation: "зуб" },
  { noun: "Hut", gender: "der", translation: "капелюх" },
  { noun: "Geld", gender: "das", translation: "гроші" },
  { noun: "Spülmaschine", gender: "die", translation: "посудомийна машина" },
  { noun: "Reise", gender: "die", translation: "подорож" },
  { noun: "Essen", gender: "das", translation: "їжа" },
  { noun: "Onkel", gender: "der", translation: "дядько" },
  { noun: "Sohn", gender: "der", translation: "син" },
  { noun: "T-Shirt", gender: "das", translation: "футболка" },
  { noun: "Gemüse", gender: "das", translation: "овочі" },
  { noun: "Termin", gender: "der", translation: "термін, зустріч" },
  { noun: "Flasche", gender: "die", translation: "пляшка" },
  { noun: "Freund", gender: "der", translation: "друг" },
  { noun: "Firma", gender: "die", translation: "компанія" },
  { noun: "Tee", gender: "der", translation: "чай" },
  { noun: "Fahrer", gender: "der", translation: "водій" },
  { noun: "Salz", gender: "das", translation: "сіль" },
  { noun: "Anschluss", gender: "der", translation: "перехід, з'єднання" },
  { noun: "Reisebüro", gender: "das", translation: "туристичне агентство" },
  { noun: "Wind", gender: "der", translation: "вітер" },
  { noun: "Käse", gender: "der", translation: "сир" },
  { noun: "Praxis", gender: "die", translation: "клініка" },
  { noun: "Rock", gender: "der", translation: "спідниця" },
  { noun: "Tomate", gender: "die", translation: "помідор" },
  { noun: "Bahnhof", gender: "der", translation: "вокзал" },
  { noun: "Getränk", gender: "das", translation: "напій" },
  { noun: "Lampe", gender: "die", translation: "лампа" },
  { noun: "Kühlschrank", gender: "der", translation: "холодильник" },
  { noun: "Schule", gender: "die", translation: "школа" },
  { noun: "Abendessen", gender: "das", translation: "вечеря" },
  { noun: "Küche", gender: "die", translation: "кухня" },
  { noun: "Gesicht", gender: "das", translation: "обличчя" },
  { noun: "Fuß", gender: "der", translation: "нога" },
  { noun: "Öl", gender: "das", translation: "олія" },
  { noun: "Reiseführer", gender: "der", translation: "екскурсовод" },
  { noun: "Stuhl", gender: "der", translation: "стілець" },
  { noun: "Frühstück", gender: "das", translation: "сніданок" },
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
