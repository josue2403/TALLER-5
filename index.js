function showSuccessMessage() {
    var form = document.getElementById("registrationForm");
    var inputs = form.getElementsByTagName("input");
    var allFilled = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        mostrarNotificacion();
        clearFormInputs(form);
    } else {
        alert('Por favor, llene todos los campos obligatorios.');
    }

    return false;
}

function mostrarNotificacion() {
    var notificacion = document.getElementById('notificacion');
    notificacion.innerText = '¡Datos enviados correctamente!';
    notificacion.style.display = 'block';

    setTimeout(function() {
        notificacion.style.display = 'none';
    }, 3000);
}

function clearFormInputs(form) {
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ""; 
    }
}
