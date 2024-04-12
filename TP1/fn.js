
//Mostrar personajes // document.addEventListener("DOMContentLoaded", () => {
  //  const characterList = document.getElementById("character-list");

    /*fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <div class="character-details">
                        <h2>${character.name}</h2>
                        <p>Estado: ${character.status}</p>
                    </div>
                `;
                listItem.className = "character-item";
                characterList.appendChild(listItem);
            });
        })
       // });*/
 async function buscar() {

 let valor = document.getElementById('valor').value;
 let nom = document.getElementsByName('nombre');
 const url = `https://rickandmortyapi.com/api/character/`;

try{

const response= await fetch(url);
const data= await response.json;
const nombre = data.name;
const estado = data.status;
const foto = data.image;

document.getElementById('nombre').textContent=`nombre: ${nombre}`;
document.getElementById('foto').scr = "";
document.getElementById('nombre').textContent=`nombre: ${estado}`;
}
catch(error) {console.error("Error de solicitud")}
 }
