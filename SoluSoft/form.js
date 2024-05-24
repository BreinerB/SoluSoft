function generarTarjeta() {
    const nombre = document.getElementById('nombre').value;
    const profesion = document.getElementById('profesion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const foto = document.getElementById('foto').files[0];

    const habilidades = Array.from(document.querySelectorAll('input[name="habilidades"]:checked'))
        .map(habilidad => habilidad.value);

    if (habilidades.length > 3) {
        alert('Puede seleccionar un máximo de 3 habilidades.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const tarjetaHTML = `
            <div class="tarjeta">
                <img src="${event.target.result}" alt="Foto de ${nombre}" class="foto-tarjeta">
                <h2>${nombre}</h2>
                <p><strong>Profesión:</strong> ${profesion}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
                <p><strong>Habilidades:</strong> ${habilidades.join(', ')}</p>
            </div>
        `;

        // Abrir una nueva ventana emergente con el contenido de la tarjeta
        const nuevaVentana = window.open('', '_blank', 'width=400,height=600,left=100,top=100,scrollbars=yes,menubar=no');
        nuevaVentana.document.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Tarjeta de Visita</title><link rel="stylesheet" href="styles.css"><style>body { margin: 0; font-family: Arial, sans-serif; }</style></head><body>');
        nuevaVentana.document.write('<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">');
        nuevaVentana.document.write(tarjetaHTML);
        nuevaVentana.document.write('</div></body></html>');
        nuevaVentana.document.close();
    }

    if (foto) {
        reader.readAsDataURL(foto);
    } else {
        alert("Por favor, seleccione una foto.");
    }
}
