let usciti = []; 
const lastNum = document.querySelector('#ultimo-numero');

window.onload = (e) => {
  rendiTabellone();

  const btnEstrai = document.querySelector('#estrai');
  const btnReset = document.querySelector('#reset');

  if (btnEstrai) {
    btnEstrai.addEventListener('click', estrai);
  }

  if (btnReset) {
    btnReset.addEventListener('click', resettaTabellone);
  }
};

// Griglia
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

// Cronologia
const rendiCronologia = () => {
  const cronologiaDiv = document.querySelector('#cronologia');
  if (!cronologiaDiv) return;

  const ultimi10 = usciti.slice(-10).reverse();
  cronologiaDiv.textContent = ultimi10.join(', ');
};

const estrai = () => {
  let nonUsciti = [];
  for (let i = 1; i <= 90; i++) {
    if (!usciti.includes(i)) {
      nonUsciti.push(i);
    }
  }

  if (nonUsciti.length === 0) {
    console.log("Tutti i numeri sono stati estratti!");
    return null;
  }

  const indiceC = Math.floor(Math.random() * nonUsciti.length);
  const numEstratto = nonUsciti[indiceC];

  usciti.push(numEstratto);

  const divs = document.querySelectorAll('#tabellone .num');
  divs.forEach(div => {
    if (parseInt(div.textContent) === numEstratto) {
      div.classList.add('uscito');
    }
  });

 // numero estratto
  if (lastNum) {
    lastNum.textContent = numEstratto;
  }
  
  rendiCronologia();

  return numEstratto;
};

// Reset
const resettaTabellone = () => {
  usciti = [];

  // Rimuove .uscito
  const divs = document.querySelectorAll('#tabellone .num');
  divs.forEach(div => {
    div.classList.remove('uscito');
  });

  // Pulisce cronologia
  const cronologiaDiv = document.querySelector('#cronologia');
  if (cronologiaDiv) {
    cronologiaDiv.textContent = '';
  }

};