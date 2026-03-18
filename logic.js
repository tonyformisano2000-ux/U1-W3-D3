const submit = function (e) {
  e.preventDeFault();
  const newTask = document.querySelector("input").value;
  newTask.classList("newTask");
  console.log("'", newTask, "'  è stato aggiunto alla lista");
  const p = document.createElement(p);
  p.innerText = newTask;
  const cestino = document.createElement(button);
  cestino.innerHTML +=
    "<img src='./delete_20dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png'/>";
  const check = document.createElement(button);
  check.innerHTML +=
    "<style>.material-symbols-outlined {  font-variation-settings:  'FILL' 0,  'wght' 400,'GRAD' 0, 'opsz' 20}</style>";
  const riga = document.createElement(div);
  riga.appendChild(cestino);
  riga.appendChild(p);
  riga.appendChild(check);
  riga.classList("riga");
  const list = document.getElementById(list);
  list.appendChild(riga);
  submit.reset();
};
