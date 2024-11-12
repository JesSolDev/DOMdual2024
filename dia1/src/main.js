//seleccion elementos del dom

const $form=document.querySelector('#form');
const appDiv=document.getElementById('app');

appDiv.innerText="Hola mundo"; //texto plano
appDiv.innerHTML="<h1>Hola Mundo</h1>"; //html interpretado
//añadir clases a un elemento
appDiv.classList.add("clase1","clase2");
const items = document.getElementsByClassName("items");
items.length;
let iterador=0;
for(const i of items){
    i.textContent=`hola amego${iterador+1}`;
    iterador++;
}
//seleccion por clase
const saludoP = document.querySelector(".saludo");
//traer todos por clase
const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo,index)=>{
    saludo.innerText=`Hola mundillo ${index}`;
});

//Añadir atributos a una etiqueta
const miGit= document.getElementById("github");
miGit.setAttribute("target","_blank");
//quitar target
//miGit.removeAttribute("target")
miGit.innerText="Ir a mi GitHub";