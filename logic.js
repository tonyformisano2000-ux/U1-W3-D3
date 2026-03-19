const pappardelle = function (e) {
  e.preventDefault();
  const form = document.getElementById("form"); // viene richiamato il form
  const newTask = document.querySelector("#enterIt"); //querySelector richiede di chiamare gli id e le class. newTask=input
  // const nuovoTask = newTask.value; //newtask.value=il valore dell'input, stringa
  const p = document.createElement("p"); //creo un tag paragrafo
  p.classList.add("p"); //assegno una classe al paragrafo
  p.innerText = newTask.value; //assegno a p il valore stringa di nuovoTask
  console.log("'", newTask.value, "'  è stato aggiunto alla lista"); //display sul valore in entrata
  p.setAttribute("style", "display:inline;"); // !!! per quale motivo non funzionava quando lo settavo in CSS !!!
  p.setAttribute("margin", "auto 0");
  const cestino = document.createElement("button"); //creo il bottone del cestino
  cestino.innerHTML += "<img src='./cestino.png'/>"; //assegno un'icona al cestino
  const check = document.createElement("button"); //creo il boattone del check
  check.classList.add("check");
  check.innerHTML += "<img src='./check.png' style='vertical-align:center'>"; //assegno al bottone un'icona
  cestino.addEventListener("click", bin);
  // check.addEventListener("click",checked)
  const separator = document.createElement("hr");
  separator.setAttribute("margin", "10px");
  const riga = document.createElement("div"); // creo un <div></div> al quale assegnare il task, cestino e check
  riga.appendChild(check); //assegno check
  riga.appendChild(p); // assegno paragrafo
  riga.appendChild(cestino); //assegno cestino
  riga.appendChild(separator);
  riga.classList.add("riga"); //assegno una class al div

  const list = document.getElementById("list"); // importo il luogo a cui appendere il div Riga
  list.appendChild(riga); //appendo Riga
  form.reset(); //resetto gli imput della pagina
  return riga;
};

const bin = (e) => {
  console.log("elimino la linea selezionata");
  const bottone = e.target.parentElement;
  bottone.remove();
};

const checked = (e) => {
  console.log("COMPLIMENTI! una in meno!");
  riga.innerHTML += "<style>background-color=green;</style>";
};
