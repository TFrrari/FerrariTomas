/*var frutas = ['pera','manzana','frutilla','naranja','kiwi'];


for (const fruta of frutas){
    if (fruta == "manzana"){
        console.log(fruta);
    }
}
//function frutas()
//    for(i=0; i<frutas.length; i++)
//{
 //   frutas.forEach(fruta => {console.log(fruta);})
//}
//console.log(array)
//--
//--
//API Rick y morty*/
document.addEventListener("DOMContentLoaded", () => {
    const characterList = document.getElementById("character-list");

    fetch("https://rickandmortyapi.com/api/character")
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
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});
