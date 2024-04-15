function buscarMatch() {
    const id1 = document.getElementById('char1').value;
    const id2 = document.getElementById('char2').value;

    if (id1 && id2) {
        fetch(`https://rickandmortyapi.com/api/character/${id1}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener personaje 1');
                }
                return response.json();
            })
            .then(char1 => {
                return fetch(`https://rickandmortyapi.com/api/character/${id2}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error al obtener personaje 2');
                        }
                        return response.json();
                    })
                    .then(char2 => {
                        const resultado = document.getElementById('resultado');
                        const imgResultado = document.getElementById('imgMatch');

                        if ((char1.gender === 'Male' && char2.gender === 'Female') || (char1.gender === 'Female' && char2.gender === 'Male')) {
                            resultado.innerText = `${char1.name} y ${char2.name} hacen Match!`;
                            imgResultado.src = 'tick_green.png';
                        } else {
                            resultado.innerText = `${char1.name} y ${char2.name} no hacen Match.`;
                            imgResultado.src = 'cross_red.png';
                        }
                    });
            })
            .catch(error => {
                console.error(error);
                const resultado = document.getElementById('resultado');
                resultado.innerText = 'Error al obtener los personajes.';
                document.getElementById('imgMatch').src = '';
            });
    } else {
        const resultado = document.getElementById('resultado');
        resultado.innerText = 'Ingresa ambos IDs.';
        document.getElementById('imgMatch').src = '';
    }
}
