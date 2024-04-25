function showSuccessMessage() {
    // Obtener el formulario
    var form = document.getElementById("registrationForm");
    // Obtener todos los elementos de entrada dentro del formulario
    var inputs = form.getElementsByTagName("input");
    // Variable para verificar si todos los campos están llenos
    var allFilled = true;

    // Iterar sobre todos los campos de entrada
    for (var i = 0; i < inputs.length; i++) {
        // Verificar si el valor del campo está vacío
        if (inputs[i].value === "") {
            allFilled = false;
            break; // Detener el bucle si se encuentra un campo vacío
        }
    }

    // Si todos los campos están llenos
    if (allFilled) {
        // Mostrar notificación de éxito
        mostrarNotificacion();
        // Limpiar los campos del formulario
        clearFormInputs(form);
    } else {
        // Si hay campos vacíos, mostrar alerta
        alert('Por favor, llene todos los campos obligatorios.');
    }

    return false; // Evitar que el formulario se envíe
}

function mostrarNotificacion() {
    // Obtener el elemento de notificación
    var notificacion = document.getElementById('notificacion');
    // Establecer el texto de la notificación
    notificacion.innerText = '¡Datos enviados correctamente!';
    // Mostrar la notificación
    notificacion.style.display = 'block';

    // Ocultar la notificación después de 3 segundos
    setTimeout(function() {
        notificacion.style.display = 'none';
    }, 3000);
}

function clearFormInputs(form) {
    // Obtener todos los elementos de entrada dentro del formulario
    var inputs = form.getElementsByTagName("input");
    // Limpiar el valor de cada campo de entrada
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ""; 
    }
}
