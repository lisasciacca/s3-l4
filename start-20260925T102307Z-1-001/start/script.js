/*
  REGOLE
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML). 
*/

let usciti = []; // array dei numeri già estratti


window.onload = (e) => {
  rendiTabellone();
};

// Creiamo la griglia
const rendiTabellone = () => {
  const tabellone = document.querySelector('#tabellone');
  
  for (let i = 0; i < 90; i++) {
    const numDiv = document.createElement('div');
    numDiv.classList.add('num');
    
    let num = i + 1;
    numDiv.textContent = num;
    numDiv.classList.add('numero');
    
    tabellone.appendChild(numDiv);
  }
};


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/