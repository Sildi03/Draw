var COLORE_ADESSO = "red";
var cancella = "";

var boxVerde = document.querySelector(".verde");
var boxViola = document.querySelector(".viola");
var boxArancione = document.querySelector(".arancione");
var box = document.querySelector(".box");
var tasto_i = document.querySelector(".foo");


boxVerde.addEventListener("click", () => { COLORE_ADESSO = "green"; })
boxViola.addEventListener("click", () => { COLORE_ADESSO = "purple"; })
boxArancione.addEventListener("click", () => { COLORE_ADESSO = "orange"; })
box.addEventListener("click", onClickBox);



function onClickBox(mioEvento){
  console.log(`mioEvento.offsetX`, mioEvento.offsetX);
  console.log(`mioEvento.offsetY`, mioEvento.offsetY);
  creaPunto(mioEvento.offsetX, mioEvento.offsetY);
};


function creaPunto(posizioneX, posizioneY){
  var nuovoPunto = document.createElement("div");
  nuovoPunto.classList.add("punto");
  nuovoPunto.style.top = posizioneY + "px";
  nuovoPunto.style.left = posizioneX + "px";
  nuovoPunto.style.background = COLORE_ADESSO;
  nuovoPunto.innerHTML = tasto_i.value;
  box.appendChild(nuovoPunto);
}



