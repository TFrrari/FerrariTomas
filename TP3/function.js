var map = L.map('mapid').setView([0, 0], 3); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function buscarUbicacion() {
    axios.get('https://randomuser.me/api/')
        .then(function (response) {
            var user = response.data.results[0];
            var lat = parseFloat(user.location.coordinates.latitude);
            var lon = parseFloat(user.location.coordinates.longitude);
            
            
            L.marker([lat, lon]).addTo(map)
                .bindPopup(user.location.city)
                .openPopup();
            
            
            map.setView([lat, lon], 13);
        })
        .catch(function (error) {
            console.error('Error al obtener datos:', error);
        });
}


document.getElementById('buscar').addEventListener('click', buscarUbicacion);