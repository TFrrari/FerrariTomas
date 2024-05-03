//const buscar1 = document.getElementById('buscar1');
//const buscar2 = document.getElementById('buscar2');

    let valores = [];
    async function mostrarpersonajes(valores)
    {
        const resultadodiv = document.getElementById('resultados');
        resultadodiv.innerHTML= '';

        try{
        for (const valor of valores) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${valor}`);
                if (!response.ok)
                {throw new error('no se pudieron obtener los personajes')}
        }
        const character= await response.json();
        
        const characterdiv= document.createElement('div');
        characterdiv.classlist.add('character')

        const image=document.createElement('img')
            image.src=character.image
            image.alt=character.name
        const name = document.createElement('p')
        name.textContent=character.name
        characterdiv.appendChild(image)
        characterdiv.appendChild(name)
        resultadodiv.appendChild(characterdiv)   
    }
catch(error) {
    console.error('error al obtener los personajes',error)
}
}