let valores = [[], []]; // Arreglo para almacenar los valores de los dos inputs

async function mostrarPersonajes(valores) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    try {
        for (const conjunto of valores) {
            const characterIds = conjunto.join(',');
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterIds}`);
            if (!response.ok) {
                throw new Error('No se pudo obtener el personaje');
            }
            const characters = await response.json();

            for (const character of characters) {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');

                const image = document.createElement('img');
                image.src = character.image;
                image.alt = character.name;

                const name = document.createElement('p');
                name.textContent = character.name;

                characterDiv.appendChild(image);
                characterDiv.appendChild(name);
                resultadosDiv.appendChild(characterDiv);
            }
        }
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}

function buscarPersonajes() {
    // Obtener los valores de ambos inputs
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();

    // Verificar si se ingresaron tres valores en alguno de los inputs
    if (valores[0].length === 3 || valores[1].length === 3) {
        // Mostrar los personajes si se ingresaron tres valores en alguno de los inputs
        mostrarPersonajes(valores);
    }

    // Limpiar los valores del input1 si se ingresaron tres valores
    if (valores[0].length === 3) {
        document.getElementById('input1').value = '';
    }

    // Limpiar los valores del input2 si se ingresaron tres valores
    if (valores[1].length === 3) {
        document.getElementById('input2').value = '';
    }

    // Agregar los valores a los arreglos correspondientes
    if (input1 !== '') {
        valores[0].push(input1);
    }
    if (input2 !== '') {
        valores[1].push(input2);
    }
}