let words;
let list = [
  { noun: "Alter", gender: "das", translation: "вік" },
  { noun: "Angebot", gender: "das", translation: "пропозиція" },
  { noun: "Apartment", gender: "das", translation: "квартира" },
  { noun: "Auge", gender: "das", translation: "око" },
  { noun: "Ausland", gender: "das", translation: "закордон" },
  { noun: "Auto", gender: "das", translation: "автомобіль" },
  { noun: "Baby", gender: "das", translation: "немовля" },
  { noun: "Bad", gender: "das", translation: "ванна" },
  { noun: "Bein", gender: "das", translation: "нога" },
  { noun: "Beispiel", gender: "das", translation: "приклад" },
  { noun: "Bett", gender: "das", translation: "ліжко" },
  { noun: "Bier", gender: "das", translation: "пиво" },
  { noun: "Bild", gender: "das", translation: "зображення" },
  { noun: "Brot", gender: "das", translation: "хліб" },
  { noun: "Brötchen", gender: "das", translation: "булочка" },
  { noun: "Buch", gender: "das", translation: "книга" },
  { noun: "Café", gender: "das", translation: "кафе" },
  { noun: "Datum", gender: "das", translation: "дата" },
  { noun: "Doppelzimmer", gender: "das", translation: "двомісний номер" },
  { noun: "Dorf", gender: "das", translation: "село" },
  { noun: "Ei", gender: "das", translation: "яйце" },
  { noun: "Einzelzimmer", gender: "das", translation: "одномісний номер" },
  { noun: "Ende", gender: "das", translation: "кінець" },
  { noun: "Ergebnis", gender: "das", translation: "результат" },
  { noun: "Fahrrad", gender: "das", translation: "велосипед" },
  { noun: "Fax", gender: "das", translation: "факс" },
  { noun: "Feuer", gender: "das", translation: "вогонь" },
  { noun: "Fieber", gender: "das", translation: "гарячка" },
  { noun: "Fleisch", gender: "das", translation: "м'ясо" },
  { noun: "Flugzeug", gender: "das", translation: "літак" },
  { noun: "Formular", gender: "das", translation: "формуляр" },
  { noun: "Foto", gender: "das", translation: "фотографія" },
  { noun: "Frühstück", gender: "das", translation: "сніданок" },
  { noun: "Geburtsjahr", gender: "das", translation: "рік народження" },
  { noun: "Geld", gender: "das", translation: "гроші" },
  { noun: "Gepäck", gender: "das", translation: "багаж" },
  { noun: "Geschäft", gender: "das", translation: "магазин" },
  { noun: "Geschenk", gender: "das", translation: "подарунок" },
  { noun: "Gespräch", gender: "das", translation: "розмова" },
  { noun: "Getränk", gender: "das", translation: "напій" },
  { noun: "Gewicht", gender: "das", translation: "вага" },
  { noun: "Glas", gender: "das", translation: "склянка" },
  { noun: "Glück", gender: "das", translation: "щастя" },
  { noun: "Haar", gender: "das", translation: "волосся" },
  { noun: "Hähnchen", gender: "das", translation: "курча" },
  { noun: "Handy", gender: "das", translation: "мобільний телефон" },
  { noun: "Haus", gender: "das", translation: "будинок" },
  { noun: "Hobby", gender: "das", translation: "хобі" },
  { noun: "Hotel", gender: "das", translation: "готель" },
  { noun: "Kind", gender: "das", translation: "дитина" },
  { noun: "Kino", gender: "das", translation: "кінотеатр" },
  { noun: "Konto", gender: "das", translation: "рахунок" },
  { noun: "Land", gender: "das", translation: "країна" },
  { noun: "Leben", gender: "das", translation: "життя" },
  { noun: "Licht", gender: "das", translation: "світло" },
  { noun: "Lied", gender: "das", translation: "пісня" },
  { noun: "Lokal", gender: "das", translation: "заклад" },
  { noun: "Mädchen", gender: "das", translation: "дівчина" },
  { noun: "Meer", gender: "das", translation: "море" },
  { noun: "Obst", gender: "das", translation: "фрукти" },
  { noun: "Öl", gender: "das", translation: "олія" },
  { noun: "Papier", gender: "das", translation: "папір" },
  { noun: "Praktikum", gender: "das", translation: "практика" },
  { noun: "Problem", gender: "das", translation: "проблема" },
  { noun: "Reisebüro", gender: "das", translation: "туристичне агентство" },
  { noun: "Restaurant", gender: "das", translation: "ресторан" },
  { noun: "Salz", gender: "das", translation: "сіль" },
  { noun: "Schild", gender: "das", translation: "вивіска" },
  { noun: "Schwimmbad", gender: "das", translation: "басейн" },
  { noun: "Sofa", gender: "das", translation: "диван" },
  { noun: "Studium", gender: "das", translation: "навчання" },
  { noun: "Taxi", gender: "das", translation: "таксі" },
  { noun: "Telefon", gender: "das", translation: "телефон" },
  { noun: "Thema", gender: "das", translation: "тема" },
  { noun: "Ticket", gender: "das", translation: "квиток" },
  { noun: "Wasser", gender: "das", translation: "вода" },
  { noun: "Wetter", gender: "das", translation: "погода" },
  { noun: "Wiederhören", gender: "das", translation: "до почуття" },
  { noun: "Wiedersehen", gender: "das", translation: "до побачення" },
  { noun: "Wort", gender: "das", translation: "слово" },
  { noun: "Zimmer", gender: "das", translation: "кімната" },
  { noun: "Abflug", gender: "der", translation: "відліт" },
  { noun: "Absender", gender: "der", translation: "відправник" },
  { noun: "Anfang", gender: "der", translation: "початок" },
  { noun: "Anrufbeantworter", gender: "der", translation: "автовідповідач" },
  { noun: "Anschluss", gender: "der", translation: "з'єднання" },
  { noun: "Apfel", gender: "der", translation: "яблуко" },
  { noun: "Appetit", gender: "der", translation: "апетит" },
  { noun: "Arbeitsplatz", gender: "der", translation: "робоче місце" },
  { noun: "Arm", gender: "der", translation: "рука" },
  { noun: "Arzt", gender: "der", translation: "лікар" },
  { noun: "Aufzug", gender: "der", translation: "ліфт" },
  { noun: "Ausflug", gender: "der", translation: "екскурсія" },
  { noun: "Ausgang", gender: "der", translation: "вихід" },
  { noun: "Ausländer", gender: "der", translation: "іноземець" },
  { noun: "Ausweis", gender: "der", translation: "посвідчення" },
  { noun: "Automat", gender: "der", translation: "автомат" },
  { noun: "Bahnhof", gender: "der", translation: "вокзал" },
  { noun: "Bahnsteig", gender: "der", translation: "платформа" },
  { noun: "Balkon", gender: "der", translation: "балкон" },
  { noun: "Bauch", gender: "der", translation: "живіт" },
  { noun: "Baum", gender: "der", translation: "дерево" },
  { noun: "Beamte", gender: "der", translation: "чиновник" },
  { noun: "Beruf", gender: "der", translation: "професія" },
  { noun: "Bleistift", gender: "der", translation: "олівець" },
  { noun: "Blick", gender: "der", translation: "погляд" },
  { noun: "Bogen", gender: "der", translation: "дуга" },
  { noun: "Brief", gender: "der", translation: "лист" },
  { noun: "Bruder", gender: "der", translation: "брат" },
  { noun: "Buchstabe", gender: "der", translation: "літера" },
  { noun: "Bus", gender: "der", translation: "автобус" },
  { noun: "Chef", gender: "der", translation: "шеф" },
  { noun: "Computer", gender: "der", translation: "комп'ютер" },
  { noun: "Dank", gender: "der", translation: "подяка" },
  { noun: "Doktor", gender: "der", translation: "доктор" },
  { noun: "Drucker", gender: "der", translation: "принтер" },
  { noun: "Durst", gender: "der", translation: "спрага" },
  { noun: "Eingang", gender: "der", translation: "вхід" },
  { noun: "Eintritt", gender: "der", translation: "вхідний квиток" },
  { noun: "Empfänger", gender: "der", translation: "одержувач" },
  { noun: "Erwachsene", gender: "der", translation: "дорослий" },
  { noun: "Fahrer", gender: "der", translation: "водій" },
  { noun: "Familienname", gender: "der", translation: "прізвище" },
  { noun: "Familienstand", gender: "der", translation: "сімейний стан" },
  { noun: "Fehler", gender: "der", translation: "помилка" },
  { noun: "Film", gender: "der", translation: "фільм" },
  { noun: "Flughafen", gender: "der", translation: "аеропорт" },
  { noun: "Freund", gender: "der", translation: "друг" },
  { noun: "Fuß", gender: "der", translation: "нога" },
  { noun: "Fußball", gender: "der", translation: "футбол" },
  { noun: "Garten", gender: "der", translation: "сад" },
  { noun: "Gast", gender: "der", translation: "гість" },
  { noun: "Geburtsort", gender: "der", translation: "місце народження" },
  { noun: "Geburtstag", gender: "der", translation: "день народження" },
  { noun: "Glückwunsch", gender: "der", translation: "побажання" },
  { noun: "Großvater", gender: "der", translation: "дідусь" },
  { noun: "Gruß", gender: "der", translation: "привітання" },
  { noun: "Herd", gender: "der", translation: "плита" },
  { noun: "Herr", gender: "der", translation: "пан" },
  { noun: "Hund", gender: "der", translation: "собака" },
  { noun: "Hunger", gender: "der", translation: "голод" },
  { noun: "Job", gender: "der", translation: "робота" },
  { noun: "Jugendliche", gender: "der", translation: "підліток" },
  { noun: "Junge", gender: "der", translation: "хлопець" },
  { noun: "Kaffee", gender: "der", translation: "кава" },
  { noun: "Kindergarten", gender: "der", translation: "дитсадок" },
  { noun: "Kiosk", gender: "der", translation: "кіоск" },
  { noun: "Koffer", gender: "der", translation: "валіза" },
  { noun: "Kollege", gender: "der", translation: "колега" },
  { noun: "Kopf", gender: "der", translation: "голова" },
  { noun: "Kuchen", gender: "der", translation: "торт, пиріг" },
  { noun: "Kugelschreiber", gender: "der", translation: "кулькова ручка" },
  { noun: "Kühlschrank", gender: "der", translation: "холодильник" },
  { noun: "Kunde", gender: "der", translation: "клієнт" },
  { noun: "Kurs", gender: "der", translation: "курс" },
  { noun: "Laden", gender: "der", translation: "крамниця" },
  { noun: "Lehrer", gender: "der", translation: "вчитель" },
  { noun: "Lkw", gender: "der", translation: "вантажівка" },
  { noun: "Mann", gender: "der", translation: "чоловік" },
  { noun: "Mensch", gender: "der", translation: "людина" },
  { noun: "Moment", gender: "der", translation: "момент" },
  { noun: "Mund", gender: "der", translation: "рот" },
  { noun: "Name", gender: "der", translation: "ім’я" },
  { noun: "Opa", gender: "der", translation: "дідусь" },
  { noun: "Ort", gender: "der", translation: "місце" },
  { noun: "Partner", gender: "der", translation: "партнер" },
  { noun: "Pass", gender: "der", translation: "паспорт" },
  { noun: "Plan", gender: "der", translation: "план" },
  { noun: "Platz", gender: "der", translation: "місце" },
  { noun: "Preis", gender: "der", translation: "ціна" },
  { noun: "Prospekt", gender: "der", translation: "проспект" },
  { noun: "Raum", gender: "der", translation: "приміщення" },
  { noun: "Regen", gender: "der", translation: "дощ" },
  { noun: "Reis", gender: "der", translation: "рис" },
  { noun: "Reiseführer", gender: "der", translation: "гід" },
  { noun: "Saft", gender: "der", translation: "сік" },
  { noun: "Salat", gender: "der", translation: "салат" },
  { noun: "Satz", gender: "der", translation: "речення" },
  { noun: "Schalter", gender: "der", translation: "віконце (напр. в касі)" },
  { noun: "Schinken", gender: "der", translation: "шинка" },
  { noun: "Schluss", gender: "der", translation: "кінець" },
  { noun: "Schlüssel", gender: "der", translation: "ключ" },
  { noun: "Schrank", gender: "der", translation: "шафа" },
  { noun: "Schuh", gender: "der", translation: "черевик" },
  { noun: "Schüler", gender: "der", translation: "учень" },
  { noun: "See", gender: "der", translation: "озеро" },
  { noun: "Sohn", gender: "der", translation: "син" },
  { noun: "Sport", gender: "der", translation: "спорт" },
  { noun: "Stock", gender: "der", translation: "поверх" },
  { noun: "Student", gender: "der", translation: "студент" },
  { noun: "Tee", gender: "der", translation: "чай" },
  { noun: "Teil", gender: "der", translation: "частина" },
  { noun: "Termin", gender: "der", translation: "призначення" },
  { noun: "Test", gender: "der", translation: "тест" },
  { noun: "Text", gender: "der", translation: "текст" },
  { noun: "Tisch", gender: "der", translation: "стіл" },
  { noun: "Unterricht", gender: "der", translation: "заняття" },
  { noun: "Urlaub", gender: "der", translation: "відпустка" },
  { noun: "Vater", gender: "der", translation: "батько" },
  { noun: "Verein", gender: "der", translation: "спілка" },
  { noun: "Verkäufer", gender: "der", translation: "продавець" },
  { noun: "Vermieter", gender: "der", translation: "орендодавець" },
  { noun: "Verwandte", gender: "der", translation: "родич" },
  { noun: "Vorname", gender: "der", translation: "ім’я" },
  { noun: "Wein", gender: "der", translation: "вино" },
  { noun: "Wind", gender: "der", translation: "вітер" },
  { noun: "Zoll", gender: "der", translation: "митниця" },
  { noun: "Zug", gender: "der", translation: "поїзд" },
  { noun: "Ehemann", gender: "der", translation: "чоловік" },
  { noun: "Hausmann", gender: "der", translation: "домогосподар" },
  { noun: "Bekannte", gender: "die", translation: "знайома" },
  { noun: "Abfahrt", gender: "die", translation: "від’їзд" },
  { noun: "Adresse", gender: "die", translation: "адреса" },
  { noun: "Ankunft", gender: "die", translation: "прибуття" },
  { noun: "Anmeldung", gender: "die", translation: "реєстрація" },
  { noun: "Anrede", gender: "die", translation: "звертання" },
  { noun: "Ansage", gender: "die", translation: "оголошення" },
  { noun: "Antwort", gender: "die", translation: "відповідь" },
  { noun: "Anzeige", gender: "die", translation: "оголошення" },
  { noun: "Arbeit", gender: "die", translation: "робота" },
  { noun: "Aufgabe", gender: "die", translation: "завдання" },
  { noun: "Auskunft", gender: "die", translation: "довідка" },
  { noun: "Aussage", gender: "die", translation: "висловлювання" },
  { noun: "Autobahn", gender: "die", translation: "автобан" },
  { noun: "Bäckerei", gender: "die", translation: "пекарня" },
  { noun: "Bahn", gender: "die", translation: "залізниця" },
  { noun: "Banane", gender: "die", translation: "банан" },
  { noun: "Bank", gender: "die", translation: "банк" },
  { noun: "Birne", gender: "die", translation: "груша" },
  { noun: "Bitte", gender: "die", translation: "прохання" },
  { noun: "Blume", gender: "die", translation: "квітка" },
  { noun: "Briefmarke", gender: "die", translation: "поштова марка" },
  { noun: "Butter", gender: "die", translation: "масло" },
  { noun: "CD", gender: "die", translation: "компакт-диск" },
  { noun: "Disco", gender: "die", translation: "дискотека" },
  {
    noun: "Durchsage",
    gender: "die",
    translation: "оголошення (по гучномовцю)",
  },
  { noun: "Dusche", gender: "die", translation: "душ" },
  { noun: "Ecke", gender: "die", translation: "кут" },
  { noun: "Ehefrau", gender: "die", translation: "дружина" },
  { noun: "Einladung", gender: "die", translation: "запрошення" },
  { noun: "Eltern", gender: "die", translation: "батьки" },
  { noun: "E-Mail", gender: "die", translation: "електронна пошта" },
  { noun: "Entschuldigung", gender: "die", translation: "вибачення" },
  { noun: "Fahrkarte", gender: "die", translation: "квиток на транспорт" },
  { noun: "Familie", gender: "die", translation: "родина" },
  { noun: "Farbe", gender: "die", translation: "колір" },
  { noun: "Firma", gender: "die", translation: "компанія" },
  { noun: "Flasche", gender: "die", translation: "пляшка" },
  { noun: "Frage", gender: "die", translation: "питання" },
  { noun: "Frau", gender: "die", translation: "жінка" },
  { noun: "Freizeit", gender: "die", translation: "вільний час" },
  { noun: "Führung", gender: "die", translation: "екскурсія" },
  { noun: "Geschwister", gender: "die", translation: "брати і сестри" },
  { noun: "Größe", gender: "die", translation: "розмір" },
  { noun: "Großeltern", gender: "die", translation: "дідусь і бабуся" },
  { noun: "Großmutter", gender: "die", translation: "бабуся" },
  { noun: "Gruppe", gender: "die", translation: "група" },
  { noun: "Halbpension", gender: "die", translation: "напівпансіон" },
  { noun: "Halle", gender: "die", translation: "зала" },
  { noun: "Haltestelle", gender: "die", translation: "зупинка" },
  { noun: "Hand", gender: "die", translation: "рука" },
  { noun: "Hausaufgabe", gender: "die", translation: "домашнє завдання" },
  { noun: "Hausfrau", gender: "die", translation: "домогосподарка" },
  { noun: "Heimat", gender: "die", translation: "батьківщина" },
  { noun: "Hilfe", gender: "die", translation: "допомога" },
  { noun: "Hochzeit", gender: "die", translation: "весілля" },
  { noun: "Information", gender: "die", translation: "інформація" },
  { noun: "Jacke", gender: "die", translation: "куртка" },
  { noun: "Karte", gender: "die", translation: "картка" },
  { noun: "Kartoffel", gender: "die", translation: "картопля" },
  { noun: "Kasse", gender: "die", translation: "каса" },
  { noun: "Klasse", gender: "die", translation: "клас" },
  { noun: "Kleidung", gender: "die", translation: "одяг" },
  { noun: "Küche", gender: "die", translation: "кухня" },
  { noun: "Lebensmittel", gender: "die", translation: "продукти" },
  { noun: "Leute", gender: "die", translation: "люди" },
  { noun: "Lösung", gender: "die", translation: "розв’язання" },
  { noun: "Maschine", gender: "die", translation: "машина" },
  { noun: "Miete", gender: "die", translation: "орендна плата" },
  { noun: "Milch", gender: "die", translation: "молоко" },
  { noun: "Mitte", gender: "die", translation: "центр" },
  { noun: "Möbel", gender: "die", translation: "меблі" },
  { noun: "Mutter", gender: "die", translation: "мати" },
  { noun: "Nummer", gender: "die", translation: "номер" },
  { noun: "Oma", gender: "die", translation: "бабуся" },
  { noun: "Ordnung", gender: "die", translation: "порядок" },
  { noun: "Papiere", gender: "die", translation: "документи" },
  { noun: "Partnerin", gender: "die", translation: "партнерка" },
  { noun: "Party", gender: "die", translation: "вечірка" },
  { noun: "Pause", gender: "die", translation: "перерва" },
  { noun: "Polizei", gender: "die", translation: "поліція" },
  { noun: "Pommes frites", gender: "die", translation: "картопля фрі" },
  { noun: "Post", gender: "die", translation: "пошта" },
  { noun: "Postleitzahl", gender: "die", translation: "поштовий індекс" },
  { noun: "Praxis", gender: "die", translation: "практика" },
  { noun: "Prüfung", gender: "die", translation: "іспит" },
  { noun: "Rechnung", gender: "die", translation: "рахунок" },
  { noun: "Reise", gender: "die", translation: "подорож" },
  { noun: "Reparatur", gender: "die", translation: "ремонт" },
  { noun: "Rezeption", gender: "die", translation: "рецепція" },
  { noun: "S-Bahn", gender: "die", translation: "міська електричка" },
  { noun: "Schule", gender: "die", translation: "школа" },
  { noun: "Schwester", gender: "die", translation: "сестра" },
  { noun: "Sehenswürdigkeit", gender: "die", translation: "пам’ятка" },
  { noun: "Sonne", gender: "die", translation: "сонце" },
  { noun: "Speisekarte", gender: "die", translation: "меню" },
  { noun: "Sprache", gender: "die", translation: "мова" },
  { noun: "Stadt", gender: "die", translation: "місто" },
  { noun: "Stelle", gender: "die", translation: "місце" },
  { noun: "Straße", gender: "die", translation: "вулиця" },
  { noun: "Straßenbahn", gender: "die", translation: "трамвай" },
  { noun: "Stunde", gender: "die", translation: "година" },
  { noun: "Tasche", gender: "die", translation: "сумка" },
  { noun: "Tochter", gender: "die", translation: "дочка" },
  { noun: "Toilette", gender: "die", translation: "туалет" },
  { noun: "Tomate", gender: "die", translation: "помідор" },
  { noun: "Treppe", gender: "die", translation: "сходи" },
  { noun: "Uhr", gender: "die", translation: "година, годинник" },
  { noun: "Unterschrift", gender: "die", translation: "підпис" },
  { noun: "Vorsicht", gender: "die", translation: "обережність" },
  { noun: "Vorwahl", gender: "die", translation: "телефонний код" },
  { noun: "Welt", gender: "die", translation: "світ" },
  { noun: "Wohnung", gender: "die", translation: "квартира" },
  { noun: "Zeit", gender: "die", translation: "час" },
  { noun: "Zeitung", gender: "die", translation: "газета" },
  { noun: "Zigarette", gender: "die", translation: "сигарета" },
  { noun: "Name", gender: "der", translation: "ім'я" },
  { noun: "Geschlecht", gender: "das", translation: "стать" },
  { noun: "Familie", gender: "die", translation: "сім’я" },
  { noun: "Herkunft", gender: "die", translation: "походження" },
  { noun: "Aussehen", gender: "das", translation: "зовнішність" },
  { noun: "Gewohnheit", gender: "die", translation: "звичка" },
  { noun: "Tagesablauf", gender: "der", translation: "розпорядок дня" },
  { noun: "Freundschaft", gender: "die", translation: "дружба" },
  { noun: "Lieblingstier", gender: "das", translation: "улюблена тварина" },
  { noun: "Körperteil", gender: "das", translation: "частина тіла" },
  { noun: "Körperpflege", gender: "die", translation: "догляд за тілом" },
  { noun: "Hygiene", gender: "die", translation: "гігієна" },
  { noun: "Befinden", gender: "das", translation: "самопочуття" },
  { noun: "Gesundheit", gender: "die", translation: "здоров’я" },
  { noun: "Krankheit", gender: "die", translation: "хвороба" },
  { noun: "Gegend", gender: "die", translation: "місцевість" },
  {
    noun: "Land",
    gender: "das",
    translation: "країна / село (залежить від контексту)",
  },
  { noun: "Haustier", gender: "das", translation: "домашня тварина" },
  { noun: "Lebensmittel", gender: "das", translation: "продукт харчування" },
  { noun: "Mahlzeit", gender: "die", translation: "прийом їжі" },
  { noun: "Lokal", gender: "das", translation: "заклад (кафе, ресторан)" },
  { noun: "Internet", gender: "das", translation: "інтернет" },
  { noun: "Mobiltelefon", gender: "das", translation: "мобільний телефон" },
  { noun: "Postkarte", gender: "die", translation: "поштівка" },
  { noun: "Verkehrsmittel", gender: "das", translation: "транспортний засіб" },
  { noun: "Ferienziel", gender: "das", translation: "місце відпочинку" },
  { noun: "Schulsache", gender: "die", translation: "шкільне приладдя" },
  {
    noun: "Unterhaltungsmedium",
    gender: "das",
    translation: "засіб розваги (напр., телебачення, інтернет)",
  },
  { noun: "Spiel", gender: "das", translation: "гра" },
  { noun: "Interesse", gender: "das", translation: "інтерес" },
  { noun: "Kino", gender: "das", translation: "кіно" },
  { noun: "Konzert", gender: "das", translation: "концерт" },
  { noun: "Fernsehen", gender: "das", translation: "телебачення" },
  { noun: "Radio", gender: "das", translation: "радіо" },
  { noun: "Lesen", gender: "das", translation: "читання" },
  { noun: "Fest", gender: "das", translation: "свято" },
  { noun: "Feier", gender: "die", translation: "святкування" },
  { noun: "Ferien", gender: "die", translation: "канікули / відпустка" },
  { noun: "Band", gender: "die", translation: "музичний гурт" },
  { noun: "Blog", gender: "der", translation: "блог" },
  { noun: "CD-Player", gender: "der", translation: "CD-програвач" },
  { noun: "Chat(room)", gender: "der", translation: "чат (чат-кімната)" },
  { noun: "Cola", gender: "die", translation: "кола" },
  { noun: "Comic", gender: "der", translation: "комікс" },
  { noun: "DVD", gender: "die", translation: "DVD-диск" },
  { noun: "Kreuz", gender: "das", translation: "хрестик (у бланку)" },
  { noun: "Homepage", gender: "die", translation: "домашня сторінка" },
  { noun: "Laptop", gender: "der", translation: "ноутбук" },
  { noun: "Link", gender: "der", translation: "посилання" },
  { noun: "Mail", gender: "die", translation: "електронна пошта" },
  { noun: "Mailbox", gender: "die", translation: "поштова скринька" },
  { noun: "Poster", gender: "das", translation: "постер" },
  { noun: "Smartphone", gender: "das", translation: "смартфон" },
  { noun: "Antwortbogen", gender: "der", translation: "бланк відповідей" },
  { noun: "Architekt", gender: "der", translation: "архітектор" },
  { noun: "Architektin", gender: "die", translation: "архітекторка" },
  { noun: "Techniker", gender: "der", translation: "технік" },
  { noun: "Technikerin", gender: "die", translation: "технік (жінка)" },
  { noun: "Angestellte", gender: "der", translation: "службовець" },
  { noun: "Angestellte", gender: "die", translation: "службовиця" },
  { noun: "Lehrer", gender: "der", translation: "учитель" },
  { noun: "Lehrerin", gender: "die", translation: "учителька" },
  { noun: "Künstler", gender: "der", translation: "митець" },
  { noun: "Künstlerin", gender: "die", translation: "мисткиня" },
  { noun: "Ingenieur", gender: "der", translation: "інженер" },
  { noun: "Ingenieurin", gender: "die", translation: "інженерка" },
  { noun: "Kaufmann", gender: "der", translation: "торговець" },
  { noun: "Kauffrau", gender: "die", translation: "торговка" },
  { noun: "Ärztin", gender: "die", translation: "лікарка" },
  { noun: "Schauspieler", gender: "der", translation: "актор" },
  { noun: "Schauspielerin", gender: "die", translation: "акторка" },
  { noun: "Sekretär", gender: "der", translation: "секретар" },
  { noun: "Sekretärin", gender: "die", translation: "секретарка" },
  { noun: "Geschwister", gender: "die", translation: "брати й сестри" },
  { noun: "Tante", gender: "die", translation: "тітка" },
  { noun: "Onkel", gender: "der", translation: "дядько" },
  { noun: "Lösung", gender: "die", translation: "розв’язок, відповідь" },
  { noun: "Teil", gender: "der", translation: "частина" },
  { noun: "Prüfungsteil", gender: "der", translation: "частина іспиту" },
  { noun: "Wörterbuch", gender: "das", translation: "словник" },
  { noun: "Norden", gender: "der", translation: "північ" },
  { noun: "Süden", gender: "der", translation: "південь" },
  { noun: "Westen", gender: "der", translation: "захід" },
  { noun: "Osten", gender: "der", translation: "схід" },
  { noun: "Deutsche", gender: "der/die", translation: "німець / німкеня" },
  { noun: "Europäer", gender: "der", translation: "європеєць" },
  { noun: "Europäerin", gender: "die", translation: "європейка" },
  { noun: "Italiener", gender: "der", translation: "італієць" },
  { noun: "Italienerin", gender: "die", translation: "італійка" },
  { noun: "Engländer", gender: "der", translation: "англієць" },
  { noun: "Engländerin", gender: "die", translation: "англійка" },
  { noun: "Grundschule", gender: "die", translation: "початкова школа" },
  { noun: "Hauptschule", gender: "die", translation: "основна школа" },
  { noun: "Gymnasium", gender: "das", translation: "гімназія" },
  { noun: "Sprachenschule", gender: "die", translation: "мовна школа" },
  { noun: "Deutsch", gender: "n/a", translation: "німецька мова" },
  { noun: "Mathematik", gender: "n/a", translation: "математика" },
  { noun: "Englisch", gender: "n/a", translation: "англійська мова" },
  { noun: "Geografie", gender: "n/a", translation: "географія" },
  { noun: "Kunst", gender: "n/a", translation: "образотворче мистецтво" },
  { noun: "Sozialkunde", gender: "die", translation: "суспільствознавство" },
  { noun: "Sport", gender: "der", translation: "фізкультура" },
  { noun: "Physik", gender: "die", translation: "фізика" },
  { noun: "Chemie", gender: "die", translation: "хімія" },
  { noun: "Geschichte", gender: "die", translation: "історія" },
  { noun: "Ostern", gender: "n/a", translation: "Великдень" },
  { noun: "Weihnachten", gender: "n/a", translation: "Різдво" },
  { noun: "Karneval", gender: "n/a", translation: "карнавал" },
  { noun: "Frühling", gender: "der", translation: "весна" },
  { noun: "Sommer", gender: "der", translation: "літо" },
  { noun: "Herbst", gender: "der", translation: "осінь" },
  { noun: "Winter", gender: "der", translation: "зима" },
  { noun: "Januar", gender: "der", translation: "січень" },
  { noun: "Februar", gender: "der", translation: "лютий" },
  { noun: "März", gender: "der", translation: "березень" },
  { noun: "April", gender: "der", translation: "квітень" },
  { noun: "Mai", gender: "der", translation: "травень" },
  { noun: "Juni", gender: "der", translation: "червень" },
  { noun: "Juli", gender: "der", translation: "липень" },
  { noun: "August", gender: "der", translation: "серпень" },
  { noun: "September", gender: "der", translation: "вересень" },
  { noun: "Oktober", gender: "der", translation: "жовтень" },
  { noun: "November", gender: "der", translation: "листопад" },
  { noun: "Dezember", gender: "der", translation: "грудень" },
  { noun: "Morgen", gender: "der", translation: "ранок" },
  { noun: "Vormittag", gender: "der", translation: "передобідній час" },
  { noun: "Mittag", gender: "der", translation: "полудень" },
  { noun: "Nachmittag", gender: "der", translation: "післяобідній час" },
  { noun: "Abend", gender: "der", translation: "вечір" },
  { noun: "Nacht", gender: "die", translation: "ніч" },
  { noun: "Sonntag", gender: "der", translation: "неділя" },
  { noun: "Montag", gender: "der", translation: "понеділок" },
  { noun: "Dienstag", gender: "der", translation: "вівторок" },
  { noun: "Mittwoch", gender: "der", translation: "середа" },
  { noun: "Donnerstag", gender: "der", translation: "четвер" },
  { noun: "Freitag", gender: "der", translation: "п’ятниця" },
  { noun: "Samstag", gender: "der", translation: "субота" },
  { noun: "Wochenende", gender: "das", translation: "вихідні" },
  { noun: "Hose", gender: "die", translation: "штани" },
  { noun: "Freundin", gender: "die", translation: "подруга" },
  { noun: "Stiefel", gender: "die", translation: "чоботи" },
  { noun: "Wolke", gender: "die", translation: "хмара" },
  { noun: "Krankenhaus", gender: "das", translation: "лікарня" },
  { noun: "Hemd", gender: "das", translation: "сорочка" },
  { noun: "Kleid", gender: "das", translation: "сукня" },
  { noun: "Spiegel", gender: "der", translation: "дзеркало" },
  { noun: "Schuhe", gender: "die", translation: "черевики" },
  { noun: "Körper", gender: "der", translation: "тіло" },
  { noun: "Lernen", gender: "das", translation: "навчання" },
  { noun: "Himmel", gender: "der", translation: "небо" },
  { noun: "Rücken", gender: "der", translation: "спина" },
  { noun: "Schlafzimmer", gender: "das", translation: "спальня" },
  { noun: "Wurst", gender: "die", translation: "ковбаса" },
  { noun: "Medizin", gender: "die", translation: "медицина" },
  { noun: "Waschmaschine", gender: "die", translation: "пральна машина" },
  { noun: "Fisch", gender: "der", translation: "риба" },
  { noun: "Zucker", gender: "der", translation: "цукор" },
  { noun: "Flur", gender: "der", translation: "коридор" },
  { noun: "Ohr", gender: "das", translation: "вухо" },
  { noun: "Mittagessen", gender: "das", translation: "обід" },
  { noun: "Wohnzimmer", gender: "das", translation: "вітальня" },
  { noun: "Teppich", gender: "der", translation: "килим" },
  { noun: "Apotheke", gender: "die", translation: "аптека" },
  { noun: "Nase", gender: "die", translation: "ніс" },
  { noun: "Badezimmer", gender: "das", translation: "ванна кімната" },
  { noun: "Zahn", gender: "der", translation: "зуб" },
  { noun: "Hut", gender: "der", translation: "капелюх" },
  { noun: "Spülmaschine", gender: "die", translation: "посудомийна машина" },
  { noun: "Essen", gender: "das", translation: "їжа" },
  { noun: "T-Shirt", gender: "das", translation: "футболка" },
  { noun: "Gemüse", gender: "das", translation: "овочі" },
  { noun: "Käse", gender: "der", translation: "сир" },
  { noun: "Rock", gender: "der", translation: "спідниця" },
  { noun: "Lampe", gender: "die", translation: "лампа" },
  { noun: "Abendessen", gender: "das", translation: "вечеря" },
  { noun: "Gesicht", gender: "das", translation: "обличчя" },
  { noun: "Stuhl", gender: "der", translation: "стілець" },
];
words = list.sort((a, b) => a.noun.localeCompare(b.noun));
