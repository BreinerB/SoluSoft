document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('areas-container');
    
    fetch('areas_data.html')
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
});
