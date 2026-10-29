// Seleccionamos el botón usando su ID
const btnAbrir = document.getElementById('btnAbrir');

// Agregamos el evento 'click' al botón
btnAbrir.addEventListener('click', function() {
    // Obtenemos los valores de los campos de texto
    let latitud = document.getElementById('latitud').value;
    let longitud = document.getElementById('longitud').value;

    // Google Maps utiliza puntos para los decimales. 
    // Como en la imagen se usan comas, las reemplazamos por puntos.
    latitud = latitud.replace(',', '.');
    longitud = longitud.replace(',', '.');

    // Verificamos que los campos no estén vacíos
    if (latitud === '' || longitud === '') {
        alert('Por favor, ingresa tanto la latitud como la longitud.');
        return;
    }

    // Armamos la URL de Google Maps con las coordenadas
    const urlGoogleMaps = `https://www.google.com/maps?q=${latitud},${longitud}`;

    // Abrimos la URL en una nueva pestaña
    window.open(urlGoogleMaps, '_blank');
});