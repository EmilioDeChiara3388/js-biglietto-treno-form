//console.log("Funzioni?");

/* 
Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const formEl = document.querySelector(".form-inline");
//console.log(formEl);
const ticketInfo = document.querySelector(".card-body");

formEl.addEventListener("submit", function (e){
    e.preventDefault();
    console.log(e.target.fullName.value);
    console.log(e.target.km.value);
    console.log(e.target.age.value);

    let passengerName = document.getElementById("fullName").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    let price = km * 0.21;
    let discount = 0;
    let finalPrice = price - discount;

    if (age < 18){
        discount = price - (price / 100 * 80);
        finalPrice = price - discount;
    } else if (age >= 65){
        discount = price - (price / 100 * 60);
        finalPrice = price - discount;
    }
    console.log(finalPrice.toFixed(2));

    let passengerEl = `
    <div>
        <p>${"Nome del passeggero:"} ${passengerName}</p>
        <p>${"Km da percorrere:"} ${km}</p>
        <p>${"Età del passeggero:"} ${age} ${"anni"}</p>
        <p>${"Prezzo del biglietto:"} ${finalPrice.toFixed(2)} ${"Euro"}</p>
        <hr>
    </div>
    `

    ticketInfo.insertAdjacentHTML("beforeend", passengerEl);
});






