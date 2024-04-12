
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
       // });
 async function buscar() {

 let valor = document.getElementById('valor').value;
 let nom = document.getElementsByName('nombre').innerHTML =data.name;
 const url = `https://rickandmortyapi.com/api/character`;

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
 }*/
 async function obtenerPersonaje() {
    const idPersonaje = document.getElementById('idInput').value;
    const url = `https://rickandmortyapi.com/api/character/${idPersonaje}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        const nombre = data.name;
        const foto = data.image;
        const estado = data.status;

        document.getElementById('nombre').textContent = `Nombre: ${nombre}`;
        document.getElementById('foto').src = foto;
        document.getElementById('estado').textContent = `Estado: ${estado}`;
    } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        document.getElementById('nombre').textContent = "Personaje no encontrado.";
        document.getElementById('foto').src = "";
        document.getElementById('estado').textContent = "";
    }
}
 document.getElementById('estado').textContent = "";
    

