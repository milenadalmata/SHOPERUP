// =========================================================================
// ZAJĘCIA 6: Podstawy JavaScript
// =========================================================================

// --- Zadanie 1 — Kalkulator napiwku ---
console.log("--- ZAJĘCIA 6 — Zadanie 1: Napiwek ---");

const bill = 187.50;
const tipPercent = 10;
const numberOfPeople = 3;

const tipAmount = (bill * tipPercent) / 100;
const totalCost = bill + tipAmount;
const perPerson = totalCost / numberOfPeople;

console.log("Kwota napiwku: ", tipAmount);
console.log("Łączny koszt: ", totalCost);
console.log("Kwota na jedną osobę: ", perPerson);


// --- Zadanie 2 — Czy mogę wejść do klubu? ---
console.log("\n--- ZAJĘCIA 6 — Zadanie 2: Klub ---");

const age1 = 20;
const hasId1 = true;
const canEnter1 = age1 >= 18 && hasId1;
console.log("Czy Gość 1 może wejść? ", canEnter1);

const age2 = 16;
const hasId2 = true;
const canEnter2 = age2 >= 18 && hasId2;
console.log("Czy Gość 2 może wejść? ", canEnter2);

const age3 = 25;
const hasId3 = false;
const canEnter3 = age3 >= 18 && hasId3;
console.log("Czy Gość 3 może wejść? ", canEnter3);


// =========================================================================
// ZAJĘCIA 7: Instrukcje warunkowe i pętle
// =========================================================================

// --- Zadanie 1: Kalkulator biletów kinowych (Instrukcje warunkowe) ---
console.log("\n--- ZAJĘCIA 7 — Zadanie 1: Kino ---");

function obliczCeneBiletu(wiek) {
    if (wiek < 5) {
        return 0; // Wiek poniżej 5 lat: bilet darmowy
    } else if (wiek >= 5 && wiek <= 18) {
        return 15; // Wiek od 5 do 18 lat: bilet ulgowy
    } else if (wiek >= 19 && wiek <= 64) {
        return 25; // Wiek od 19 do 64 lat: bilet normalny
    } else {
        return 10; // Wiek 65 lat i więcej: bilet seniorski
    }
}

console.log(obliczCeneBiletu(3));   // Powinno wypisać: 0
console.log(obliczCeneBiletu(12));  // Powinno wypisać: 15
console.log(obliczCeneBiletu(30));  // Powinno wypisać: 25
console.log(obliczCeneBiletu(70));  // Powinno wypisać: 10


// --- Zadanie 2: Odliczanie i filtrowanie liczb (Pętle i Modulo) ---
console.log("\n--- ZAJĘCIA 7 — Zadanie 2: Modulo ---");

function wypiszParzyste(max) {
    for (let i = 1; i <= max; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

wypiszParzyste(10);


// --- Zadanie 3: Symulator oszczędzania (Pętla while) ---
console.log("\n--- ZAJĘCIA 7 — Zadanie 3: Oszczędzanie ---");

function ileMiesiecyNaCel(celOszczedzania, miesiecznaKwota) {
    let sumaOszczednosci = 0;
    let miesiace = 0;

    while (sumaOszczednosci < celOszczedzania) {
        sumaOszczednosci += miesiecznaKwota;
        miesiace++;
    }

    return miesiace;
}

console.log(ileMiesiecyNaCel(3000, 400)); // Powinno wypisać: 8
console.log(ileMiesiecyNaCel(1000, 500)); // Powinno wypisać: 2

// =========================================================================
// ZAJĘCIA 8: Pobieranie, modyfikacja DOM i zdarzenia
// =========================================================================

// --- Zadanie 1: Dynamiczna zmiana treści i stylu ---
console.log("\n--- ZAJĘCIA 8 — Zadanie 1: Modyfikacja DOM ---");

// 1. Pobieramy element nagłówka po ID #main-title
const mainTitle = document.querySelector("#main-title");

// 2. Zmieniamy tekst wewnątrz nagłówka
mainTitle.innerText = "Tytuł został zmieniony!";

// 3. Zmieniamy kolor tekstu na pomidorowy
mainTitle.style.color = "tomato";


// --- Zadanie 2: Interaktywny licznik z modyfikacją stylu ---
console.log("--- ZAJĘCIA 8 — Zadanie 2: Licznik ---");

// 1. Zmienna licznikowa przechowująca stan kliknięć
let counter = 0;

// 2. Pobieramy przycisk i kontener na tekst
const btnAction = document.querySelector(".btn-action");
const boxElement = document.querySelector(".box");

// 3. Dodajemy nasłuchiwanie zdarzenia "click" na przycisku
btnAction.addEventListener("click", function() {
    // - Zwiększamy licznik o 1
    counter++;
    
    // - Zmieniamy tekst kontenera wpisując aktualną wartość
    boxElement.innerText = "Liczba kliknięć: " + counter;
    
    // - Przełączamy (dodajemy/usuwamy) klasę CSS .highlight
    boxElement.classList.toggle("highlight");
});