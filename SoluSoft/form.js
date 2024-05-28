function generarTarjeta() {
    const nombre = document.getElementById('nombre').value;
    const profesion = document.getElementById('profesion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const foto = document.getElementById('foto').files[0];

    const habilidades = Array.from(document.querySelectorAll('input[name="habilidades"]:checked'))
        .map(habilidad => habilidad.value);

    const nombrePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const profesionPattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const telefonoPattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const linkedinPattern = /^https?:\/\/(www\.)?linkedin\.com\/.*$/;

    if (!nombrePattern.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios.');
        return;
    }

    if (!profesionPattern.test(profesion)) {
        alert('La profesión solo puede contener letras y espacios.');
        return;
    }

    if (!telefonoPattern.test(telefono)) {
        alert('El teléfono debe contener 10 dígitos.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Debe ingresar un correo electrónico válido.');
        return;
    }

    if (!linkedinPattern.test(linkedin)) {
        alert('Debe ser un enlace válido de LinkedIn.');
        return;
    }

    if (habilidades.length > 3) {
        alert('Puede seleccionar un máximo de 3 habilidades.');
        return;
    }

    if (!foto) {
        alert("Por favor, seleccione una foto.");
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

    reader.readAsDataURL(foto);
}

