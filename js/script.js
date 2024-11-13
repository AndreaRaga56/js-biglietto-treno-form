let nomeInput = document.getElementById('username');
let etaInput = document.getElementById('age');
let chilometriInput = document.getElementById('km');
let formElement = document.getElementById('form');
const prezzoAlKm = 0.21;

const nomeElem = document.getElementById('nomeCard');
const scontoElem = document.getElementById('scontoCard');
const carrozaElem = document.getElementById('carrozzaCard');
const nTrenoElem = document.getElementById('nTrenoCard'); 
const prezzoElem = document.getElementById('prezzoCard');
const card = document.querySelector("section");

formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeValue = nomeInput.value.trim();
    const etaValue = parseInt(etaInput.value.trim());
    const chilometriValue = parseInt(chilometriInput.value.trim());
    let sconto = "Biglietto Standard";
    let carrozza = Math.floor(Math.random()*(18))+1;
    let nTreno = Math.floor(Math.random()*(99999-1+10000))+10000;

    let prezzoTotale = chilometriValue * prezzoAlKm;
    if (etaValue >= 65) {
        prezzoTotale = prezzoTotale * 0.6;
        sconto = "Biglietto Over 65";
    } else if (etaValue < 18) {
        prezzoTotale = prezzoTotale * 0.8;
        sconto = "Biglietto Under 18";
    }
    prezzoTotale = prezzoTotale.toFixed(2);
    
    nomeElem.innerHTML = nomeValue;
    scontoElem.innerHTML = sconto;
    carrozaElem.innerHTML = carrozza;
    nTrenoElem.innerHTML = nTreno;
    prezzoElem.innerHTML = `${prezzoTotale} Euro`;

    card.classList.remove("d-none");
    
    // console.log(nomeValue);
    // console.log(`${etaValue} Anni`);
    // console.log(`${chilometriValue}Km`);   
    // console.log(carrozza); 
    // console.log(nTreno); 
    // console.log(prezzoTotale);
})

