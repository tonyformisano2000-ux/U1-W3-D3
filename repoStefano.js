// per intervenire con il form, la prima cosa da fare è STOPPARE il comportamento di default
// del browser e impedire il refresh della pagina al SUBMIT del form

const formSubmitFunction = function (e) {
  // qual è la prima cosa da fare? STOPPARE il comportamento di default!
  e.preventDefault() // il browser non si aggiornerà
  // bene! ora recupero gli input del form e ne leggerò le proprietà .value
  const firstNameInput = document.getElementById('firstname') // input firstName
  const lastNameInput = document.getElementById('lastname') // input lastName
  const phoneInput = document.getElementById('phone') // input phone
  // ora che ho gli input, posso LEGGERNE le proprietà .value
  const nome = firstNameInput.value
  const cognome = lastNameInput.value
  const telefono = phoneInput.value

  console.log(`Dati salvati: ${nome} ${cognome} ${telefono}`)

  // ora ci spingeremo oltre al console.log(), e creeremo fisicamente dei nuovi pezzi di pagina
  // per visualizzare i dati inseriti!
  //   1) creiamo un div vuoto (article)
  const card = document.createElement('article') // <article></article>
  // 2) nel foglio CSS c'è già una classe pronta per questa card, "contact-card"
  card.classList.add('contact-card') // <article class="contact-card"></article>
  // 3) ora lo riempiamo con i dati recuperati dal form!
  // 3-a) creando fisicamente la struttura a "matrioska"
    const firstP = document.createElement('p')
    firstP.innerText = `${nome} ${cognome}`
    const secondP = document.createElement('p')
    secondP.innerText = `${telefono}`
    // ora li appendiamo nella card
    card.appendChild(firstP)
    card.appendChild(secondP)
    //   ora, infine, appendo la card alla sezione dedicata nell'HTML (id "saved-contacts")
    const section = document.getElementById('saved-contacts')
    section.appendChild(card)
  // 3-b) manipolando direttamente l'HTML di saved-contacts
//   const section = document.getElementById('saved-contacts')
//   section.innerHTML += `
//         <article class="contact-card">
//             <p>${nome} ${cognome}</p>
//             <p>${telefono}</p>
//             <button onclick="deleteCard(event)">🗑️ ELIMINA</button>
//         </article>
//     `
  form.reset()
}

const deleteCard = function (e) {
  console.log('ORA ELIMINO LA CARD')
  // problema! tutti i bottoni ELIMINA chiamano questa funzione. Come faccio a risalire a QUALE sia
  // stato il bottone che è stato premuto? devo eliminare SOLAMENTE la card in cui era contenuto...
  // avete principalmente UN modo per discernere quale card eliminare: ve lo dice L'OGGETTO EVENTO

  // per recuperare la e nelle funzioni associate direttamente agli event listener in HTML,
  // la e NON è regalata :( dovete mettere nell'HTML che scatenerà questa funzione il parametro "event"

  console.log(e.target) // BOTTONE
  const button = e.target
  // abbiamo capito che e.target è un riferimento al preciso bottone che è stato cliccato!
  const article = button.parentElement
  article.remove()
}

// recupero un riferimento DEL FORM
@@ -22,3 +67,10 @@
// le tonde dopo formSubmitFunction NON CI VANNO -> perchè altrimenti quella funzione verrebbe
// eseguita AUTOMATICAMENTE all'avvio della pagina (perchè è un ESECUZIONE di funzione!)
// quindi non mettete le tonde -> "collegate" formSubmitFunction all'evento submit del form

// RICORDATEVI, se utilizzate addEventListener in JS la e è REGALATA
// se utilizzate onclick, onscroll, onsubmit="miaFunzione()" se da miaFunzione volete ricevere la e
// dovete passare la parola "event" all'handler -> onsubmit="miaFunzione(event)"

// così dopo avete:
// const miaFunzione = function(e){}